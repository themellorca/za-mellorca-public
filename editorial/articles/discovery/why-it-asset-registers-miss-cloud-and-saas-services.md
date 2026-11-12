---
hub: discovery
record_id: DISC-361
slug: why-it-asset-registers-miss-cloud-and-saas-services
title: Why IT asset registers miss cloud and SaaS services
description: Asset registers built around hardware often omit the SaaS applications and cloud resources that hold most business data. How to close the gap before an audit finds it.
lead: Asset registers built around hardware often omit the SaaS applications and cloud resources that hold most business data. How to close the gap before an audit finds it.
category: Security & Compliance Operations
published_date: 2026-10-07
updated_date: 2026-10-07
eyebrow: Security & Compliance Operations
problem_domain: Security & Compliance Operations
problem_owner: IT manager, with the compliance or information officer accountable for the audit finding
budget_owner: CFO or financial director
sources:
  - CIS Control 1: Inventory and Control of Enterprise Assets | https://www.cisecurity.org/controls/inventory-and-control-of-enterprise-assets
  - Overview of Azure Resource Graph - Azure Resource Graph | https://learn.microsoft.com/en-us/azure/governance/resource-graph/overview
  - Cloud app discovery overview - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery
  - What is application management? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-application-management
related:
  - Access logs that disappear before the auditor asks for them | /discovery/access-logs-that-disappear-before-the-auditor-asks/
  - Why third-party security reviews keep starting from scratch | /discovery/third-party-security-reviews-keep-starting-from-scratch/
  - Why Policy Acknowledgements Need a Reliable System Record | /discovery/why-policy-acknowledgements-need-a-reliable-system-record/
summary: Asset registers built around hardware often omit the SaaS applications and cloud resources that hold most business data. How to close the gap before an audit finds it.
layout: plain
---
The auditor asks for the IT asset register. The business produces a tidy spreadsheet of laptops, servers, firewalls and printers, each with a serial number and an owner. Then the auditor asks where customer data is stored, and the answers include a CRM, a cloud accounting package, a file-sharing service, two cloud virtual machines and a marketing platform. None of them is on the register. The finding writes itself: the asset inventory does not reflect the environment the business actually runs on.

This article looks at that operating condition: asset inventories that omit cloud and SaaS resources. It is common in businesses whose register was designed when "IT assets" meant hardware, and it tends to surface during an audit, an insurance renewal or a security incident.

## The problem in plain language

The asset register lists what the business bought and can touch. Meanwhile much of its data and processing has moved to services it subscribes to: SaaS applications signed up for by departments, cloud storage, hosted data stores, virtual machines, backups held by a provider. These are assets in every sense that matters for security and compliance. They hold data, they have access controls, they can be misconfigured, and they need an owner. But because there is no serial number and often no purchase order, they never reach the register.

## What the buyer is actually trying to solve

Buyers usually arrive here from an audit or insurance questionnaire. They search for how to build a complete IT asset inventory, how to include cloud services in an asset register, or how to respond to an asset management finding. Underneath, the need is simple: one reliable list of everything that stores or processes the business's data, with an owner for each item, that stays current without a heroic annual effort.

## Evidence and system mechanism

### Recognised controls define assets broadly

The [CIS Critical Security Control 1](https://www.cisecurity.org/controls/inventory-and-control-of-enterprise-assets) covers all enterprise assets, including end-user devices, network devices, IoT devices and servers, connected to the infrastructure physically, virtually, remotely and within cloud environments. Its purpose is to know what needs to be protected and to find unmanaged or unauthorised assets. A register that stops at physical hardware does not meet that intent.

### Cloud resources are discoverable, but only if someone looks

Cloud platforms provide the raw material for an inventory. Microsoft's [Azure Resource Graph documentation](https://learn.microsoft.com/en-us/azure/governance/resource-graph/overview) describes querying resources across subscriptions with filtering and grouping, and viewing recent configuration changes. Equivalent features exist on other platforms. The data is there; the gap is that nobody feeds it into the register, and a query only covers subscriptions the person running it can see.

### SaaS use is often invisible to IT

SaaS is harder. Microsoft's [cloud app discovery overview](https://learn.microsoft.com/en-us/defender-cloud-apps/set-up-cloud-discovery) describes analysing firewall and proxy traffic logs against a catalogue of more than 31,000 cloud apps to give visibility into cloud use and shadow IT. The existence of tools built for this purpose shows how routinely SaaS use happens outside formal procurement. Identity platforms add another source: applications connected to single sign-on are listed as enterprise applications, and [Microsoft's application management guidance](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-application-management) recommends that each has at least two owners to avoid ownerless applications.

### Warning signs

- The asset register has no category for cloud services or subscriptions.
- Card statements show software charges that IT does not recognise, the cost side of which is described in [unknown software subscriptions and invisible recurring cost](/impact/unknown-software-subscriptions-invisible-recurring-cost/).
- Cloud resources exist that nobody can explain, as covered in [infrastructure resources without a clear business owner](/discovery/infrastructure-resources-without-a-clear-business-owner/).
- Data-mapping exercises for privacy compliance discover systems the register never listed.

## Problem owner and why-now trigger

The IT manager or head of IT normally owns the register. Where there is a risk, compliance or information officer, they own the finding. The CFO or financial director usually funds remediation, because the audit report goes to them and to the audit committee.

The trigger is typically an audit finding, followed closely by cyber-insurance questionnaires that ask for an inventory of systems holding personal data, and by privacy obligations. In South Africa, the Protection of Personal Information Act expects responsible parties to secure personal information with appropriate measures, which is difficult to demonstrate for systems the business has not listed.

## Economic consequence

The direct cost is remediation effort under deadline pressure: staff reconstructing an inventory from invoices, emails and memory before the next audit. Less visible is the security exposure. An unlisted service is unlikely to be included in access reviews, backup checks, offboarding or vulnerability management, so former staff may retain access and misconfigurations go unnoticed. There is also wasted spend on duplicate or forgotten subscriptions, and a slower, more expensive response to any incident because responders must first discover what exists.

## Root cause

- **A hardware-shaped definition.** The register was designed around purchase and depreciation, not around where data lives.
- **Decentralised sign-up.** Departments can subscribe to SaaS on a card without IT involvement, a route explored in [why free trials become production dependencies](/discovery/why-free-trials-become-production-dependencies/).
- **No feed from cloud platforms.** Cloud resources are created and deleted continuously, while the register is updated by hand once a year.
- **No owner field that means anything.** Even where services are listed, no named business owner is accountable for them.

The business-application view of this gap is covered in [why businesses cannot list all the applications they use](/discovery/why-businesses-cannot-list-all-applications-they-use/). This article focuses on the security and audit inventory.

## Practical intervention

1. **Redefine what counts as an asset.** Extend the register to include SaaS applications, cloud accounts and subscriptions, hosted data stores and significant cloud resources. Record data classification, owner, administrator and where the data sits.
2. **Use multiple discovery sources.** Combine finance data (card and supplier payments), identity data (applications connected to single sign-on), cloud platform inventories and, where available, network or endpoint discovery. No single source finds everything.
3. **Automate the cloud feed.** Schedule exports or queries from cloud platforms into the register so that new resources appear without manual effort.
4. **Put a gate on new services.** Make registration part of procurement and expense approval: a new subscription is not reimbursed or renewed until it has an owner and a register entry.
5. **Review on a cycle.** Reconcile the register against discovery sources quarterly, investigate unknowns, and retire services that are no longer used.

### Trade-offs

A complete inventory is a moving target. It is better to have a register that covers every service holding sensitive data, with owners, than to chase every free tool an individual tried once. Start with what stores customer, employee or financial data.

### An illustrative example

Illustrative: a Durban logistics company with about 150 staff received an audit finding that its asset register listed only hardware. A review of supplier payments, single sign-on connections and its cloud account found more than forty services, including two file-sharing tools holding customer documents and a test environment holding a copy of live customer data. The company added a cloud and SaaS section to the register, named an owner for each service, connected its cloud account inventory to a monthly export, and made register entry a condition of approving new subscriptions.

## Diagnostic questions

- Does your asset register include SaaS applications and cloud resources, or only hardware?
- For each system holding personal information, is there a named business owner?
- How would a new SaaS subscription bought on a company card reach the register?
- When did you last reconcile the register against payments and sign-in data?
- Could you tell an insurer, within a day, every service that stores customer data?

## What good looks like

The register lists every service and resource that stores or processes the business's data, regardless of whether it is a physical device. Each has an owner, a data classification and an administrator. Cloud inventories feed the register automatically, new subscriptions cannot be approved without an entry, and a quarterly reconciliation catches what slips through. The next audit request for the asset register is answered with a report rather than a project.

## Where Mellorca fits

A [Digital Systems Audit](/services/digital-systems-audit/) can discover the cloud and SaaS services a business actually uses, map where its data sits and rebuild the register around owners. Mellorca's [digital operations](/services/digital-operations/) work can then automate the discovery feeds and add the procurement and review steps that keep the inventory current.

## Method note

This article does not provide legal advice on POPIA or audit requirements, which depend on the business and its auditors. Product capabilities are taken from vendor documentation and differ between platforms. The example is illustrative rather than a client case.
