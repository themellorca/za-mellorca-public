---
hub: discovery
record_id: DISC-308
slug: certificates-expire-because-nobody-owns-renewal
title: Why certificates expire when nobody clearly owns their renewal
description: An expired certificate can take a website, API or integration offline instantly. How to give every certificate an owner and a renewal path.
lead: An expired TLS certificate can take a website, API or integration offline in an instant. Why expiry keeps happening when ownership is unclear, and how to give every certificate an owner and a renewal path.
category: Cloud, Infrastructure & Platform Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Cloud, Infrastructure & Platform Operations
problem_domain: Cloud, Infrastructure & Platform Operations
problem_owner: IT manager or infrastructure lead, with named owners for each certificate-dependent service
budget_owner: Chief information officer or chief operating officer
sources:
  - Ballot SC081v3: Introduce Schedule of Reducing Validity and Data Reuse Periods | https://cabforum.org/2025/04/11/ballot-sc081v3-introduce-schedule-of-reducing-validity-and-data-reuse-periods/
  - Ending Support for Expiration Notification Emails | https://letsencrypt.org/2025/01/22/ending-expiration-emails/
  - Managed certificate renewal in AWS Certificate Manager - AWS Certificate Manager | https://docs.aws.amazon.com/acm/latest/userguide/managed-renewal.html
  - About Azure Key Vault certificate renewal | https://learn.microsoft.com/en-us/azure/key-vault/certificates/overview-renew-certificate
related:
  - When monitoring alerts fire and nobody knows who should respond | /discovery/monitoring-alerts-without-a-clear-response-owner/
  - Infrastructure resources that exist without a clear business owner | /discovery/infrastructure-resources-without-a-clear-business-owner/
  - Why infrastructure changes get made without recording the business impact | /discovery/infrastructure-changes-without-recorded-business-impact/
summary: An expired TLS certificate can take a website, API or integration offline in an instant. Why expiry keeps happening when ownership is unclear, and how to give every certificate an owner and a renewal path.
layout: plain
---
On a Monday morning the customer portal shows a browser security warning. Orders stop. The mobile app cannot connect to its API. Within an hour someone finds the cause: a TLS certificate expired over the weekend. It had been bought two years earlier by a developer who has since left, renewed once by an agency, and installed by hand on a load balancer. The reminder emails went to a mailbox nobody reads.

Certificate expiry is one of the most avoidable outages in IT, and one of the most common. The date is known from the day the certificate is issued. The problem is rarely technical; it is that nobody clearly owns the renewal.

## The problem in plain language

A TLS certificate proves to browsers and other systems that a website or service is genuine and allows encrypted connections. Every certificate has an expiry date. When it passes, browsers show warnings, apps refuse to connect and integrations fail. Typical signs that ownership is unclear include:

- no single list of the certificates the business uses;
- certificates bought by different people, agencies or suppliers on different accounts;
- renewal reminders going to former staff or shared mailboxes;
- certificates installed by hand on servers, firewalls or appliances;
- internal certificates for integrations that nobody remembers creating.

## What you are actually trying to solve

People ask why their website says the connection is not private, how to track certificate expiry dates, how to automate certificate renewal, or who should be responsible for SSL certificates. After an outage, managers want to know why a predictable date caught everyone by surprise. The real need is an inventory of certificates, a named owner for each, and a renewal method that does not depend on someone remembering.

## Evidence and system mechanism

### Certificate lifetimes are getting much shorter

The CA/Browser Forum, which sets rules for publicly trusted certificates, adopted [ballot SC-081v3](https://cabforum.org/2025/04/11/ballot-sc081v3-introduce-schedule-of-reducing-validity-and-data-reuse-periods/). It introduces a phased reduction in maximum certificate validity, starting in March 2026 and reaching 47 days by March 2029, down from 398 days. The ballot's reasoning is that shorter lifetimes keep certificate information closer to reality and reduce risk. The practical effect is that a renewal that once happened every year will happen many times a year. A manual process that barely worked annually will not survive that.

### Reminder emails cannot be relied on

Let's Encrypt, a widely used free certificate authority, [announced that it would stop sending expiry reminder emails](https://letsencrypt.org/2025/01/22/ending-expiration-emails/) in 2025, citing the spread of reliable renewal automation, privacy and cost. Businesses that relied on those emails as their only warning lost it.

### Automation covers some certificates, not all

AWS documents that its Certificate Manager [renews eligible certificates automatically](https://docs.aws.amazon.com/acm/latest/userguide/managed-renewal.html) when DNS validation is in place, or sends notices when it cannot. Imported certificates and those that have already expired are not eligible, and certificates are regional, so copies in different regions renew separately. Microsoft's guidance on [Azure Key Vault certificate renewal](https://learn.microsoft.com/en-us/azure/key-vault/certificates/overview-renew-certificate) explains that expiry notifications go to the contacts configured on the vault, and that certificates from certificate authorities not integrated with Key Vault must be renewed through a manual request process. In both cases, automation works only when someone has set it up and someone receives the warnings.

## Problem owner and why-now trigger

The IT manager or infrastructure lead should own the certificate inventory and renewal process. Each certificate-dependent service, such as the website, customer portal or a partner integration, needs a named service owner who is told when renewal is due and confirms it works. Budget usually sits with the chief information officer or chief operating officer.

The immediate trigger is usually an availability incident: a site or integration goes down because a certificate expired. The move to shorter lifetimes is the structural trigger, because renewal volume rises sharply. Other triggers include a website rebuild by a new agency, a cloud migration that moves certificates to new platforms, or the departure of the person who used to handle renewals.

## Economic consequence

- **Sudden downtime.** An expired certificate stops a service completely, often outside working hours. Estimating what that costs is covered in [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/).
- **Customer trust.** Browser security warnings look like a breach to customers, even when nothing was compromised.
- **Integration failures.** Partner and payment connections may fail silently or reject requests.
- **Emergency effort.** Staff and suppliers drop other work to find credentials, accounts and servers under pressure.
- **Repeat incidents.** Without an inventory, the next expiry is just as likely.

A single small failure stopping a whole operation is a familiar pattern, described in [why a small technical failure can stop the whole business](/patterns/why-does-a-small-technical-failure-stop-the-whole-business/).

## Root cause

- **No inventory.** Certificates are scattered across hosting accounts, cloud platforms, appliances and suppliers.
- **Ownership tied to people, not roles.** Renewal depends on whoever bought the certificate.
- **Manual installation.** Certificates copied onto servers by hand cannot renew automatically.
- **Supplier gaps.** Agencies and vendors renew some certificates but not others, and contracts do not say which.
- **No monitoring of expiry.** Nothing checks the live certificate a service actually presents.

## Practical intervention

1. **Build an inventory.** List every certificate: domain, where it is installed, issuer, account, expiry date and the service it protects.
2. **Assign owners.** A role for the overall process and a service owner for each certificate-dependent service. Tools with no support owner raise the same issue, as discussed in [business capabilities that depend on tools with no support owner](/discovery/business-capabilities-depend-on-tools-with-no-support-owner/).
3. **Automate renewal where possible.** Use managed certificates on cloud platforms, or ACME-based automation for others, and remove hand-installed copies.
4. **Monitor what is live.** Check the certificate each public and internal endpoint presents, and alert the owner well before expiry.
5. **Consolidate accounts.** Move certificate purchases and DNS validation into business-owned accounts, not personal or agency ones.
6. **Write it into supplier contracts.** State who renews which certificate and how renewal is confirmed.
7. **Prepare for shorter lifetimes.** Identify which certificates still need manual steps and plan to automate them before renewal frequency rises.

### Trade-offs

Some appliances and older systems cannot automate renewal. For these, keep a dated renewal task with a named owner and a backup person, and consider replacing the device or putting an automated proxy in front of it.

### An illustrative example

Illustrative: a Pretoria professional-services firm with about 60 staff lost its client portal for half a day when a certificate bought by a former web agency expired. A review found 14 certificates across three hosting accounts and two firewalls. The firm moved most to managed, automatically renewing certificates, set up external expiry monitoring for all of them, and named the IT manager as owner of the inventory, with the practice manager as owner of the portal itself.

## Diagnostic questions

- How many certificates does your business use, and where is that list?
- Which certificate expires next, and who will renew it?
- Which certificates are renewed automatically, and which by hand?
- Where do expiry warnings go today?
- Which of your certificates are held in a supplier's or former employee's account?

## What good looks like

Every certificate appears in one inventory with an owner, a location and an expiry date. Most renew automatically in business-owned accounts. Live endpoints are checked independently, and warnings reach a named role well before expiry. Suppliers' responsibilities are written down. When certificate lifetimes shorten further, renewal volume rises without adding risk.

## Where Mellorca fits

Mellorca's [digital infrastructure](/services/digital-infrastructure/) work can build the certificate inventory, consolidate accounts and set up automated renewal. Mellorca's [managed digital operations](/services/managed-digital-operations/) service can monitor expiry and handle renewals that still need manual steps.

## Method note

This article draws on the CA/Browser Forum ballot and current certificate authority and cloud provider documentation; timelines and tool behaviour may change, so confirm current dates with your certificate provider. The example is illustrative rather than a client case.
