---
hub: insights
record_id: INS-423
slug: what-to-ask-about-apis-before-buying-business-software
title: What to ask about APIs before buying business software
description: An API checklist for software buyers covering API access, documentation, security, limits, events, data portability and versioning.
lead: A platform can look excellent in a demo and still become expensive to connect, automate or leave. API capability should therefore be evaluated before purchase, while the buyer still has leverage and alternatives.
category: Systems & Strategy
published_date: 2026-09-03
updated_date: 2026-10-02
eyebrow: Article
page_title: What to Ask About APIs Before Buying Business Software | Mellorca
tags:
  - APIs
  - Software Buying
  - Integration
cta_label: Start a conversation
cta_href: /contact/
side_title: Topics
sources:
  - GOV.UK: Describing RESTful APIs with OpenAPI 3 | https://www.gov.uk/government/publications/recommended-open-standards-for-government/describing-restful-apis-with-openapi-3
  - GOV.UK: Open Standards principles | https://www.gov.uk/government/publications/open-standards-principles/open-standards-principles
  - API technical and data standards | https://www.gov.uk/guidance/gds-api-technical-and-data-standards
  - Web API Design Best Practices - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design
related:
  - How to decide which software to remove | /insights/how-to-decide-which-software-to-remove/
  - How to avoid vendor-led architecture | /insights/how-to-avoid-vendor-led-architecture/
  - When a spreadsheet is a useful tool—and when it becomes infrastructure | /insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/
---
Most software buying conversations focus on features inside the application. The operating problem appears later, when the business needs the platform to exchange data with CRM, finance, identity, service management, reporting tools or automation workflows.

At that point, "it has an API" is not enough. The useful question is whether the API exposes the right business objects, with the right controls, reliability and commercial terms for the way the organisation expects to operate.

> API capability is part of product fit because software rarely remains an island after implementation.

### How this goes wrong in practice

A Johannesburg recruitment agency with about seventy staff buys a new candidate management platform. The demo is strong and the sales team confirms there is an API. After signing, the agency's developer finds that placements can be read through the API but not created, that invoice-relevant fields are not exposed at all, and that API access requires the next subscription tier up. The planned link to the accounting package becomes a weekly CSV export that someone in finance imports by hand. None of this was hidden. Nobody asked the right questions before purchase.

## Start with the integration outcomes you expect

Do not begin API due diligence with technical terminology. Begin with the workflows. What must enter the platform? What must leave? Which events need near-real-time action? Which records must be created or updated from another system?

For example, a buyer may need new customers from CRM to create accounts automatically, posted invoices to flow to a reporting layer, or support events to trigger a service workflow. Those expected outcomes determine which API capabilities matter.

This extends the buying discipline in [how to buy business software without letting the demo make the decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/): integration needs should be part of selection, not a surprise discovered during implementation. Writing them as a short list of "the system must send X to Y when Z happens" statements gives both your team and the vendor something concrete to test.

## Ask what the API actually exposes

Request the API documentation before purchase. Check whether the important entities and actions are available. Some products expose read access but not write operations. Others expose only a subset of fields or require separate endpoints for functionality that appears simple in the user interface.

GOV.UK's recommended OpenAPI guidance notes that a useful API description can document endpoints, operations, parameters and authentication methods, and that a standard format allows reference documentation to be generated and kept current. A machine-readable description is useful, but complete documentation should also cover practical matters such as access, examples and limits. Public, current documentation is itself a signal: a vendor that can only share it after signature, or whose documentation is visibly out of date, is telling you something about how the API is maintained.

## Ask how authentication and access are controlled

Determine whether integrations use OAuth, service accounts, API keys or another mechanism. The UK Government Digital Service's API standards recommend OAuth 2.0 over basic authentication or simple API keys where possible. Ask whether permissions can be scoped to the minimum required data and actions, whether credentials can be rotated without rebuilding the integration and whether audit evidence is available.

A product that forces every integration to use one highly privileged user account creates an operational and security dependency that should influence the buying decision. It also tends to mean integrations run on a named employee's login, which breaks when that person leaves; see [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).

## Ask about rate limits and volume

APIs often have limits on requests per minute, hour or day. Those limits may be perfectly adequate, or they may make a planned workflow unreliable at business volume.

Model expected transaction volume, peak periods and batch sizes. Ask what happens when limits are exceeded, whether limits differ by subscription tier and whether the vendor provides headers or telemetry that allow integrations to manage throttling predictably. Month-end, payroll runs and seasonal peaks are where limits usually bite, so model those days rather than an average one. The failure mode is described in [why API rate limits create intermittent business failures](/discovery/why-api-rate-limits-create-intermittent-business-failures/).

## Ask how the platform signals change

Polling an API every few minutes is not always the best integration design. Ask whether the platform supports webhooks, event subscriptions or change notifications for important business events.

If events are available, understand delivery guarantees, retry behaviour, duplicate events and how missed events can be reconciled. Event support can materially change the complexity and responsiveness of downstream automation.

## Ask about versioning and deprecation

Every important integration will eventually encounter platform change. Ask how API versions are managed, how long deprecated endpoints remain available, how customers are notified and whether breaking changes are documented in advance. Microsoft's [API design](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design) guidance describes several versioning approaches and stresses that existing clients should keep working when a new version is introduced. Ask the vendor which approach they use and how much notice they give before retiring a version.

This matters because a stable API today is only valuable if the vendor has a credible process for changing it tomorrow. It also connects directly to [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/): someone must receive and act on those notices.

## Ask what is included in the licence

API access can be technically available but commercially restricted. Verify whether API use requires a higher subscription tier, additional integration licence, usage-based charge or vendor-specific middleware.

Also ask whether the same commercial terms apply to bulk export, webhooks, sandbox environments and high-volume access. These costs belong in lifecycle economics, not only the initial licence comparison. Get the answers in writing, ideally in the order form, because pricing pages change.

## Ask about data export and exit

An API is not only an integration mechanism. It can also affect portability. Ask whether the business can export its data in usable formats, whether relationships and identifiers are preserved and whether attachments or historical records are accessible.

UK government open-standards guidance explicitly connects interoperability with flexibility, reduced lock-in and easier migration, and recommends estimating exit and migration costs at the start of a new IT project. Private businesses do not have to follow government procurement rules, but the architecture principle is useful: future change should not be made unnecessarily expensive by closed interfaces.

## Ask whether a sandbox exists

A test environment reduces the risk of developing and validating integrations against production data. Ask whether the sandbox supports the same API capabilities, how often it is refreshed and whether credentials and endpoints differ clearly from production. GDS guidance also recommends that sandboxes use realistic but non-personal test data, which matters for any business handling customer information.

## Weighing the answers

Few products will answer every question perfectly, and that is not the goal. Score each answer against the workflows you listed at the start. A missing write endpoint for a field you never need is irrelevant. A missing webhook for the event that triggers invoicing may be decisive. Where a gap matters but the product is otherwise the best fit, decide in advance how you will work around it and include that cost in the comparison.

## A practical pre-purchase API checklist
- Can we obtain the documentation before signing?
- Are the business objects and actions we need exposed?
- Can access be scoped using appropriate authentication?
- What rate and volume limits apply?
- Are webhooks or events available for important changes?
- How are retries, duplicates and failed deliveries handled?
- How does the vendor version and deprecate APIs?
- Is API access included in the proposed licence?
- Can we test integrations outside production?
- Can we export our data in a usable form if we leave?


## What to do first

Before your next software evaluation, write down the three integrations the new platform must support, and send the checklist above to every shortlisted vendor alongside them. Ask for written answers and documentation links. Have someone technical spend an hour reviewing the documentation for each. The responses will narrow the shortlist faster than another round of demos.

## What better looks like

A strong software-buying process evaluates the platform as part of a wider operating architecture. API capability is assessed against real workflows, commercial terms are understood, documentation is available and the buyer knows how the product will connect, change and eventually be exited.

That does not mean every system needs a perfect API. It means the limitations are known before they become an implementation dependency. [Digital systems architecture and roadmap](/services/digital-systems-architecture-roadmap/) work can define integration requirements before selection, and [systems implementation and integration](/services/systems-implementation-integration/) can then design the interfaces around the chosen platform's actual capabilities.
