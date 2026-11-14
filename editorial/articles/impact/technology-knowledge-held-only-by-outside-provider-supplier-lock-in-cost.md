---
hub: impact
record_id: CPS-454
slug: technology-knowledge-held-only-by-outside-provider-supplier-lock-in-cost
title: When Only Your IT Supplier Knows How Things Work: The Cost of Lock-In
description: If the only full record of your systems, passwords and configurations sits with an outside provider, switching suppliers becomes slow and risky, and your negotiating position weakens.
lead: If the only full record of your systems, passwords and configurations sits with an outside provider, switching suppliers becomes slow and risky, and your negotiating position weakens.
category: Technology Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Technology Operations
commercial_domain: Technology Operations
primary_pain: Important technology knowledge, access and documentation exist only with an outside provider
primary_cost_mechanism: Weak negotiating position at renewal, costly and slow supplier exits with overlapping fees, slower response while waiting on the supplier, and exposure to losing control of domains or systems if the supplier fails
sources:
  - https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf | https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf
  - https://www.icann.org/resources/pages/name-holder-faqs-2017-10-10-en | https://www.icann.org/resources/pages/name-holder-faqs-2017-10-10-en
  - https://learn.microsoft.com/en-us/partner-center/customers/gdap-introduction | https://learn.microsoft.com/en-us/partner-center/customers/gdap-introduction
summary: If the only full record of your systems, passwords and configurations sits with an outside provider, switching suppliers becomes slow and risky, and your negotiating position weakens.
layout: plain
---
## The handover that never happened

A manufacturer in East London decided to change its IT provider after several years of slow response times. The new provider asked for a few basics: administrator access to email and the firewall, the domain registrar login, details of how the backup worked, and a list of the systems connected to the accounting package. The outgoing provider replied slowly and partially. Some passwords had been changed. The domain turned out to be registered in the provider's name. Nobody at the manufacturer knew how the backup was configured or where the copies were kept. The switch, planned for a month, took four, and the business paid both providers for most of that time.

The manufacturer had not been careless. It had paid a capable provider to look after its technology and had trusted it to do so. Over time, all of the knowledge about how the systems actually worked had moved to the supplier, and none of it had stayed with the business.

## How knowledge moves out of the business

Knowledge concentration with a supplier usually happens gradually:

- **Administrator accounts are held by the provider.** The business has user logins, but only the provider has full control of email, devices, the firewall or cloud subscriptions.
- **Documentation lives in the provider's systems.** Network diagrams, configuration notes and passwords are kept in the provider's own documentation tool, not in anything the business can open.
- **Key registrations are in the provider's name.** Domain names, software licences and cloud accounts are sometimes registered to the supplier for convenience.
- **Custom work is undocumented.** Scripts, integrations and configurations built by the provider exist only in their heads and their repositories.
- **Nobody inside the business keeps a summary.** There is no one-page view of what the business runs, who supplies it and how it fits together.

The related risk of depending on a single employee is described in [key person dependency](/impact/key-person-operational-dependency/). Supplier lock-in is the same problem with a contract wrapped around it.

## Where the financial cost appears

### Weak negotiating position

A supplier who knows that switching would be slow and risky has less reason to compete on price or service. Renewals become a formality. Price increases are accepted because the alternative feels worse. This often shows up as [price increases accepted without review](/impact/vendor-price-increases-accepted-without-usage-review-compounding-renewal-cost/).

### Expensive exits

When the business does decide to move, it pays for the new provider to rediscover everything: audit the network, reset access, reverse-engineer configurations and rebuild documentation. Overlapping contracts during the transition add to the cost.

### Slower response to problems

If only the supplier can make changes, every change waits for the supplier's queue. That includes urgent ones, such as removing a former employee's access or responding to a security alert outside office hours.

### Exposure if the supplier fails

Small IT providers are businesses too. If a provider closes, is acquired or loses its key technician, the customer may find itself without access to its own systems. Recovering control of a domain or a cloud tenant without the supplier's cooperation can take weeks. During that time, the business may be unable to change email settings, renew licences or respond properly to a security incident.

## What should stay with the business

A business does not need to understand every technical detail. It does need to own and be able to reach the essentials. Recognised frameworks treat this as basic governance. The NIST [Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf) includes, under asset management, maintaining inventories of hardware, of software, services and systems, and of services provided by suppliers. Those inventories belong to the business, not to whoever happens to manage the systems this year. The guide on [building a useful business application inventory](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/) shows how to start one without technical help.

Several specific items deserve attention:

- **Domain names.** The registrant should be the business itself. ICANN's [registrant FAQ on transferring domain names](https://www.icann.org/resources/pages/name-holder-faqs-2017-10-10-en) explains that moving a domain to another registrar needs an authorisation code from the current registrar and confirmation from the registrant, and that changing registrant details can trigger a 60-day transfer lock. A domain held in a supplier's name, or tied to a supplier's email address, can make a switch slow at exactly the wrong moment.
- **Administrator access.** The business should hold at least one emergency administrator account for each core platform, stored securely and tested occasionally.
- **Delegated, time-limited supplier access.** Many platforms let a supplier work through granted permissions rather than the customer's own administrator account. Microsoft's introduction to [granular delegated admin privileges](https://learn.microsoft.com/en-us/partner-center/customers/gdap-introduction) describes partner access that is least-privileged and time-bound, and that customers must explicitly grant. That model keeps control with the customer.
- **Documentation in the business's hands.** Network diagrams, backup arrangements, integrations and licence records should be delivered to the business regularly, not only on request.

## The commercial trigger

The best time to fix lock-in is while the relationship is working well, not when it has broken down. A contract renewal is the natural point to add documentation and handover obligations. Another trigger is any sign of supplier instability: a key technician leaving, an acquisition or a change in response times.

## Practical next actions

1. **Check who owns your domains.** Look up each domain's registrant and make sure it is the business, with a contact email the business controls.
2. **Create emergency administrator accounts.** For email, cloud platforms and the firewall, hold one break-glass account the business controls, stored in a secure password manager.
3. **Ask your provider for a documentation pack.** Request a current list of systems, licences, network layout, backup arrangements and integrations, and agree to refresh it every six months.
4. **Move supplier access to delegated permissions.** Where platforms support it, give the provider its own named, limited access rather than shared administrator credentials.
5. **Add exit terms to the contract.** Specify what the provider must hand over, how quickly, and in what form, if the relationship ends.
6. **Test the pack once a year.** Ask a second person, inside or outside the business, to confirm they could find and use the essentials from the documentation alone.

A good IT supplier should be easy to keep and possible to leave. When knowledge sits only with the supplier, the business loses the second of those, and with it much of its leverage over cost and service.
