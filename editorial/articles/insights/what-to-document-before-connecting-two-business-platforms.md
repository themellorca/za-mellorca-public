---
hub: insights
record_id: INS-064
slug: what-to-document-before-connecting-two-business-platforms
title: What to document before connecting two business platforms
description: What to document before integrating two business platforms: ownership, data models, identifiers, events, failure paths, security, reconciliation and change dependencies.
lead: An integration is easier to maintain when the business can explain what moves, why it moves, which system owns it, how records are matched and what should happen when the connection fails.
category: Digital Infrastructure
published_date: 2026-09-05
updated_date: 2026-09-05
eyebrow: Article
page_title: What to Document Before Connecting Two Business Platforms | Mellorca
tags:
  - Integration
  - Documentation
  - Data Ownership
cta_label: Start a conversation
cta_href: /contact/
side_title: Topics
sources:
  - Retry pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/retry
  - Idempotent requests - Stripe API Reference | https://docs.stripe.com/api/idempotent_requests
closing_title: Related Mellorca services
closing_text: [Systems Implementation & Integration](/services/systems-implementation-integration/) can design and implement controlled system connections, while [Managed Digital Operations](/services/managed-digital-operations/) can maintain monitoring, ownership and recovery procedures after launch.
related:
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
  - The hidden cost of apps that do not share data | /insights/the-hidden-cost-of-apps-that-do-not-share-data/
  - Why your systems do not talk to each other | /insights/why-your-systems-do-not-talk-to-each-other/
---
Integration projects often start with a deceptively simple sentence: "When this happens in system A, create or update that in system B." The implementation becomes fragile when the team cannot answer the questions hidden inside that sentence.

Which record is authoritative? Which identifier links the same customer across platforms? What if the destination rejects the update? What if the source changes after the message is sent? What if the same event arrives twice?

> Document the business contract before you build the technical connection.

## Why undocumented integrations become expensive

An undocumented integration usually works on launch day. The cost appears later, when the person who built it has moved on, a vendor changes an API, or a record arrives that nobody anticipated. The business then has to reverse-engineer its own process from workflow screens, code and memory, often during an incident. Integrations also tend to become critical gradually: a connection built to save some re-keying ends up carrying every new customer into finance, and nobody revisits whether its design matches its new importance.

## Define the business purpose

Start by recording why the integration exists and which business outcome depends on it. "Sync CRM to finance" is too vague. "Create an approved customer account in finance after commercial onboarding is complete" defines a trigger, an intended result and a boundary.

This purpose becomes the test for future changes. If a requested field or automation does not support the agreed outcome, it may not belong in the integration. Record a business owner as well as a technical one; the reasons are set out in [why every important integration needs an owner](/insights/why-every-important-integration-needs-an-owner/).

## Record ownership and authoritative data

For every important field, identify which system is authoritative and whether the destination can edit it. Bidirectional synchronisation without explicit ownership is one of the fastest ways to create conflicting data. If both systems can change a customer's billing address, the integration needs a rule for which change wins, and the business needs to agree that rule rather than leave it to whichever update arrived last. [How to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) covers this decision in more depth.

Document the stable identifiers used to match records. Names and email addresses may change or duplicate. Integration logic should rely on identifiers that are designed to remain stable enough for the business process, and the documentation should say what happens when a match is ambiguous or missing.

## Describe the event and state model

Record what initiates the integration: a new record, a status change, a scheduled batch, an approved transaction or another business event. Define the states in which an action is allowed and the conditions that should stop it.

This reduces accidental side effects. A record being edited is not always equivalent to a business event being completed. A salesperson correcting a typo on a won deal should not trigger a second customer account in finance.

## Design failure and reconciliation before launch

Every important integration should document retry behaviour, error ownership, duplicate prevention, reconciliation and safe recovery. The destination may be temporarily unavailable, credentials can expire, validation rules can change and network calls can return uncertain outcomes.

Retries and duplicates are linked. Microsoft's [Retry pattern guidance](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry) warns that a service might receive a request and process it successfully but fail to send a response, so a retry can cause the operation to run twice unless the operation is idempotent. It also advises cancelling rather than retrying when a fault is not transient, and logging early failed attempts as informational while treating only the final failure as an error. Stripe's documentation on [idempotent requests](https://docs.stripe.com/api/idempotent_requests) shows one concrete mechanism: the client sends a unique key with each create or update, the server saves the result of the first request for that key, and later requests with the same key return the same result instead of performing the operation again. Stripe also notes that keys can be removed once they are at least 24 hours old, which is itself a detail worth documenting, because a retry after that window is treated as a new request.

Connect this design to [explicit failure paths](/insights/why-every-automation-needs-a-failure-path/). A technically successful API call is not enough if the resulting business state cannot be confirmed.

## Document security and operational dependencies

Record authentication method, required permissions, secrets ownership, data sensitivity, rate limits and external dependencies. Avoid documenting secrets themselves in general architecture records; document where they are controlled and who owns rotation.

Also capture platform versions, API endpoints, webhook subscriptions, scheduled jobs and any middleware involved. These dependencies become essential when a vendor changes behaviour or a new team inherits the integration.

## An illustrative example

The following scenario is illustrative and does not describe a specific organisation. A business connects its CRM to its accounting platform so that won deals create customer accounts. The connector is configured in an afternoon. Six months later, finance finds duplicate customers. Investigation shows three causes: the trigger fired on any edit to a won deal rather than on the change of status; matching used company name, which salespeople sometimes abbreviated; and a timeout during a month-end slowdown caused the middleware to retry a create that had already succeeded. None of these was a defect in either platform. Each was a decision nobody had written down.

## Warning signs

- Nobody can explain an integration without opening its configuration screens.
- Duplicate or conflicting records appear and are cleaned up manually.
- Integration errors go to one person's inbox, or nowhere.
- Changes to fields or workflows in one platform break the other without warning.
- The credentials an integration uses belong to a former employee or a shared account.

## A minimum integration record

- Business purpose and owner.
- Source and destination systems.
- Authoritative entities and fields.
- Stable identifiers and matching rules.
- Trigger or schedule.
- Transformation and validation rules.
- Duplicate-prevention strategy.
- Failure, retry and reconciliation behaviour.
- Security and permission model.
- Monitoring and escalation owner.
- Known limits and dependencies.
- Change and testing procedure.

## A practical diagnostic

For an existing integration, try to answer these questions from documentation alone, without opening the tool:

1. What business outcome would fail if this integration stopped today?
2. Which system wins when the same field differs?
3. What happens if the same event is delivered twice?
4. Who is told when a record fails, and how quickly?
5. How would you confirm that every source record reached the destination last month?

Any question that can only be answered by inspecting the implementation marks a gap in the record.

## Trade-offs

Documentation takes time, and it decays if nobody maintains it. The answer is proportion rather than avoidance. A low-risk notification integration needs a few lines; a connection that creates financial records deserves the full record above. Keeping the record next to the change procedure, so it is updated whenever the integration is, matters more than its length.

## What better looks like

A maintainable integration is understandable without reconstructing it from code, workflow screens and tribal memory. Documentation gives operators a map of the business contract, while the implementation remains free to change underneath that contract as platforms evolve. When something fails, the team knows what should have happened, who owns the response and how to confirm recovery. That is the difference described in [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/).
