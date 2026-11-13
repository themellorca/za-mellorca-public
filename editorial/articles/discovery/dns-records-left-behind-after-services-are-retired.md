---
hub: discovery
record_id: DISC-309
slug: dns-records-left-behind-after-services-are-retired
title: Why old DNS records pile up after services are retired, and why it matters
description: Leftover DNS records from retired services can be taken over by attackers. How to keep DNS in step with the services you actually run.
lead: When a website, app or cloud service is switched off, its DNS records often stay behind. Those leftovers can be taken over by attackers. How to keep DNS in step with the services you actually run.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT manager or infrastructure lead, with the owners of web, marketing and application services
budget_owner: Chief information officer or chief operating officer
sources:
  - Prevent dangling DNS entries and avoid subdomain takeover | https://learn.microsoft.com/en-us/azure/security/fundamentals/subdomain-takeover
  - Subdomain takeover - Security - MDN | https://developer.mozilla.org/en-US/docs/Web/Security/Subdomain_takeovers
  - Managing Public Domain Names | https://www.ncsc.gov.uk/guidance/managing-public-domain-names
related:
  - Why servers get upsized when nobody trusts the utilisation data | /discovery/server-capacity-added-because-utilisation-data-is-not-trusted/
  - Why development environments keep running after projects stop | /discovery/development-environments-keep-running-after-projects-stop/
  - Why infrastructure changes get made without recording the business impact | /discovery/infrastructure-changes-without-recorded-business-impact/
summary: When a website, app or cloud service is switched off, its DNS records often stay behind. Those leftovers can be taken over by attackers. How to keep DNS in step with the services you actually run.
layout: plain
---
A marketing team runs a campaign microsite for a product launch. An agency builds it on a cloud hosting platform, and IT adds a DNS record so that a subdomain of the company website points to it. Six months later the campaign ends, the agency deletes the hosting, and everyone moves on. The DNS record stays. A year later, someone outside the business creates a new site on the same platform with the same name, and the company's own subdomain now serves their content.

This is the risk hidden in DNS clutter. Every retired website, trial, test environment and cloud service can leave records behind. Most are harmless. Some point to names that someone else can claim.

## The problem in plain language

DNS is the system that turns names such as shop.example.co.za into the address of the server or service behind them. Records are easy to add and rarely removed. Over time a business's DNS zone fills with entries for services that no longer exist. Typical signs include:

- hundreds of records, many with names nobody recognises;
- records pointing to cloud services, hosting platforms or suppliers the business no longer uses;
- DNS managed in several places, such as a registrar, a hosting provider and a cloud platform;
- no step in project closure or supplier exit that removes DNS records;
- nobody able to say who requested a given record or why.

## What you are actually trying to solve

The questions usually sound like how to clean up DNS records, what a dangling DNS record is, how to prevent subdomain takeover, or which DNS records are safe to delete. IT managers want a tidy, understood zone. Security teams want to close an obvious gap. The underlying need is a process that keeps DNS in step with the services the business actually runs, with an owner for each record.

## Evidence and system mechanism

### Records left behind can be taken over

Microsoft's guidance on [preventing dangling DNS entries](https://learn.microsoft.com/en-us/azure/security/fundamentals/subdomain-takeover) describes subdomain takeover as a common, high-severity threat for organisations that regularly create and delete resources. A DNS record, often a CNAME, points to a cloud resource. The resource is deleted, but the record is not. Someone else then creates a resource with the same name and receives the traffic. Microsoft lists the consequences: loss of control over the subdomain's content, harvesting of cookies from visitors, convincing phishing pages, and, where mail records are involved, the ability to receive email sent to the subdomain. It also notes that an attacker can obtain a valid certificate for the hijacked name.

### Order of operations matters

MDN's explanation of [subdomain takeovers](https://developer.mozilla.org/en-US/docs/Web/Security/Subdomain_takeovers) sets out a simple rule. When provisioning, claim the hosting first and create the DNS record last. When deprovisioning, remove the DNS record first and the hosting last. It also recommends standard processes across departments and an inventory of domains and hosting providers.

### Domains need a single responsible group

The UK National Cyber Security Centre's guidance on [managing public domain names](https://www.ncsc.gov.uk/guidance/managing-public-domain-names) advises removing delegations and alias records once services are no longer used, warning that names referred to by old records may be used by others to direct traffic to systems they control. It recommends that a single group act as an internal registrar for all public domain names, and that DNS changes be logged and monitored.

## Problem owner and why-now trigger

The IT manager or infrastructure lead should own the DNS zones and the process for changing them. Each record should have a requesting owner, such as the marketing manager for campaign sites or the application owner for a customer portal. Budget sits with the chief information officer or chief operating officer.

Platform growth is the usual trigger: more cloud services, more SaaS tools with custom domains, more campaign sites and more suppliers adding records. Other triggers include a security assessment that flags dangling records, a website rebuild, a supplier exit, or a move of DNS hosting from one provider to another.

## Economic consequence

- **Brand and fraud risk.** A hijacked subdomain carries the company's name and can be used for phishing against customers and staff.
- **Incident cost.** Investigating a takeover, notifying affected parties and restoring trust takes far longer than removing a record.
- **Slow, risky changes.** When nobody understands the zone, every change takes longer and mistakes are more likely.
- **Hidden dependencies.** Records that look unused may still support email or an integration, so clean-ups stall.

## Root cause

- **DNS is added at the start and forgotten at the end.** Project closure and supplier exits do not include DNS.
- **No owner per record.** Records are added on request without recording who asked or why.
- **Fragmented management.** Zones sit with registrars, hosts and cloud platforms under different accounts.
- **Decommissioning is informal.** Services are switched off by deleting the resource, not by following a sequence.
- **No regular review.** Nothing compares DNS records with the services that actually exist.

The same pattern of things outliving their purpose appears with applications, as described in [why legacy applications remain live without an owner](/discovery/why-legacy-applications-remain-live-without-an-owner/), and with cloud resources generally, as covered in [infrastructure resources without a clear business owner](/discovery/infrastructure-resources-without-a-clear-business-owner/).

## Practical intervention

1. **Consolidate DNS management.** Bring public zones under business-owned accounts managed by one team.
2. **Inventory every record.** For each, record the service it supports, the owner and where it points.
3. **Check targets.** Identify records pointing to services, hosts or names that no longer exist or are not owned by the business, and remove or correct them.
4. **Add DNS to decommissioning.** Make “remove DNS records first” a required step when retiring any website, app or cloud service, and when a supplier engagement ends.
5. **Use platform protections.** Where available, use alias records that track the resource's lifecycle and domain verification records that stop others claiming the name.
6. **Log and review.** Log DNS changes and review the zone against the service list at least quarterly.

### Trade-offs

Deleting a record that is still needed can break email or an integration. Before removing anything unclear, check its target, search for references in systems and contracts, and, where doubt remains, ask the likely owner with a deadline before removal.

### An illustrative example

Illustrative: a Cape Town retailer with about 200 staff ran DNS across its registrar, an old web host and a cloud platform. A review found more than 300 records; around a third pointed to retired campaign sites, old test environments and a former email-marketing supplier. Several pointed to cloud names the business no longer owned. The team removed those immediately, moved all zones to one account, recorded an owner for each remaining record, and added DNS removal to its project closure checklist.

## Diagnostic questions

- How many DNS records do you have, and where are they managed?
- Can you name the owner and purpose of each record?
- Which records point to services or suppliers you no longer use?
- Does your decommissioning process include removing DNS records first?
- When did anyone last review your DNS zone against your list of live services?

## What good looks like

DNS is managed in one place by one team. Every record has an owner and a purpose. Retiring a service or ending a supplier relationship removes its DNS records before the service itself. Changes are logged, the zone is reviewed regularly, and records never point to names the business does not control.

## Where Mellorca fits

A Mellorca [digital systems audit](/services/digital-systems-audit/) can inventory DNS alongside the services and suppliers it supports. Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can consolidate zones, remove dangling records and build DNS into decommissioning.

## Method note

This article draws on current vendor, browser-documentation and national cyber-security guidance. Platform protections differ by provider. The example is illustrative rather than a client case. Investigate any record that may already have been taken over in line with your incident response process.
