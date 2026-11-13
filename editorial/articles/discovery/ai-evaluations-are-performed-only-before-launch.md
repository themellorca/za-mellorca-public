---
hub: discovery
record_id: DISC-466
slug: ai-evaluations-are-performed-only-before-launch
title: AI evaluations are performed only before launch
description: Discusses the gap created when AI evaluations are restricted to pre-launch, neglecting ongoing monitoring and governance of deployed AI systems.
lead: Discusses the gap created when AI evaluations are restricted to pre-launch, neglecting ongoing monitoring and governance of deployed AI systems.
category: AI, Automation & Agent Operations
published_date: 2026-10-01
updated_date: 2026-10-01
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: AI Governance Team
budget_owner: CIO/Finance
sources:
  - Measure - AIRC | https://airc.nist.gov/airmf-resources/playbook/measure/
  - Guidelines for secure AI system development | https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development
  - Observability in Generative AI - Microsoft Foundry | https://learn.microsoft.com/en-us/azure/foundry/concepts/observability
related:
  - Agent conversations are not connected to durable business records | /discovery/agent-conversations-not-connected-to-durable-business-records/
  - Automation incident response is improvised | /discovery/automation-incident-response-improvised/
  - Why automations should not run on personal credentials | /discovery/why-automations-should-not-run-on-personal-credentials/
summary: Discusses the gap created when AI evaluations are restricted to pre-launch, neglecting ongoing monitoring and governance of deployed AI systems.
layout: plain
---
In many organisations, AI evaluations occur primarily at the launch phase, after which monitoring for drift, bias and governance failures is intermittent or reactive. The result is a false sense of security: a model may perform adequately in tests but drift or exploit unexpected data in production, undermining trust, safety and compliance. A robust approach integrates continual evaluation as a lifecycle practice, not a one-off checkpoint.

## The problem in plain language

Before an AI assistant, classifier or agent goes live, a team runs a test set, reviews outputs, perhaps commissions red teaming, and signs it off. Then the project closes. The model, prompts, retrieval sources and user behaviour continue to change, but the evaluation does not run again until a complaint or incident forces it.

The launch evaluation was a snapshot of one moment. It cannot say whether the system is still behaving acceptably six months later.

This matters more for AI than for conventional software. A deterministic function that passed its tests will usually keep passing them until its code changes. An AI system's behaviour can shift when its inputs shift, when a provider updates a hosted model, or when users find new ways to ask questions, even though nobody in the organisation has changed anything.

## What you are actually trying to solve

Anyone seeking durable AI governance asks how to embed ongoing evaluation into operations, how to measure alignment with business objectives and how to respond when monitoring reveals misalignment. The questions sound like “how do we monitor AI in production?”, “how do we evaluate an LLM after deployment?”, “how do we watch for AI model drift?”, “how do we evaluate AI agents continuously?” and “what operating model governs our AI?”

## Evidence and system mechanism

Evaluation mechanisms include ongoing performance monitoring, bias and fairness checks, data lineage tracing and impact assessment across use cases. Without a production-focused governance loop, changes to data, prompts or task scopes can quietly erode model integrity.

Authoritative guidance treats evaluation as continuing after launch:

- **NIST AI RMF Playbook.** Measure 2.4 states that the functionality and behaviour of an AI system should be monitored when in production, because systems may encounter new issues and risks as their environment evolves. It describes monitoring how production metrics diverge from pre-deployment testing, alerting on anomalies, validating outputs against newly collected ground truth and maintaining human oversight with defined responsibilities. ([NIST AI RMF Playbook: Measure](https://airc.nist.gov/airmf-resources/playbook/measure/))
- **NCSC guidelines.** The UK National Cyber Security Centre's Guidelines for Secure AI System Development are organised across four stages: secure design, development, deployment, and operation and maintenance. The final stage covers logging and monitoring, update management and information sharing once a system is deployed. ([NCSC: Guidelines for secure AI system development](https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development))
- **Platform practice.** Microsoft's Foundry observability documentation separates pre-production evaluation from post-production monitoring, which includes continuous evaluation of sampled production traffic, scheduled evaluation against test datasets to detect drift, scheduled red teaming and alerts when outputs fail quality thresholds. ([Microsoft Learn: observability in generative AI](https://learn.microsoft.com/en-us/azure/foundry/concepts/observability))

The common mechanism is simple. Pre-launch evaluation tests the system against the conditions anticipated at launch. Production introduces conditions nobody anticipated, so only production evaluation can detect them.

## Why this becomes urgent

Urgency grows as AI-enabled workflows scale and regulatory expectations increase. Specific triggers include a change of underlying model version, new retrieval sources, prompt edits, expansion to new user groups or tasks, a customer complaint about an AI output, or an auditor asking for evidence that a deployed system still meets its original acceptance criteria.

The problem owner is typically the AI product owner or head of data and AI; budget often sits with the CTO, CIO or COO, depending on where the AI-enabled process lives.

## Economic consequence

Continuous evaluation brings improved risk management, reduced incident costs and greater confidence to iterate responsibly. Its absence carries the opposite costs:

- **Silent quality decline:** poor outputs reach customers or staff before anyone measures them.
- **Incident cost:** problems are found through complaints, then require investigation without baseline data.
- **Change paralysis:** teams hesitate to update models or prompts because they cannot check the effect.
- **Compliance exposure:** the organisation cannot evidence ongoing oversight.

Measure these through your own incident records, review effort and the time taken to approve AI changes.

## Root cause

The root cause is the absence of continuous evaluation, feedback loops and governance that tracks AI behaviour beyond initial validation, often exacerbated by misaligned incentives between rapid deployment and long-term reliability. AI work is frequently funded as a project with a launch milestone, so the evaluation dataset, tooling and reviewers disappear when the project ends. Ownership of production behaviour is then unclear.

Data quality is a frequent contributing cause; see [why AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/).

## Practical intervention

1. **Retain the launch evaluation set** as a regression baseline and keep extending it with real production cases.
2. **Incorporate continuous evaluation** as a standard part of the production AI lifecycle, with dashboards for drift, bias and alignment metrics.
3. **Establish policy gates** that trigger revalidation when data, models or prompts change significantly.
4. **Collect ground truth** from human review and downstream outcomes so evaluation reflects business results.
5. **Adopt governance processes** that require ongoing risk reviews tied to business outcomes, not just technical performance.
6. **Name an owner** for production behaviour, with defined responsibilities for overseers and a route to pause or roll back.

## Diagnostic questions

1. Is there a formal process for ongoing AI evaluation after deployment?
2. Are data sources and prompts subject to drift monitoring and revalidation triggers?
3. Do governance policies connect AI performance to business objectives?
4. Can you show how production performance compares with pre-launch results?
5. Who decides whether an AI system should be paused?

## What good looks like

A living AI governance model with continuous evaluation, timely revalidation and clear accountability for production AI behaviour. Every change is evaluated before release, production quality is sampled and trended, alerts reach an owner, and the organisation can evidence that its AI systems still meet the standard they were approved against.

## Where Mellorca fits

Mellorca supports continuous AI evaluation, drift detection and governance workflows that help teams align deployed AI with business value and risk controls. This work sits within our [business automation and AI workflows](/services/business-automation-ai-workflows/) service and can be operated under [managed digital operations](/services/managed-digital-operations/).

## Commercial path

Discovery article → AI evaluation maturity review → production evaluation design → monitoring and revalidation gates → managed AI operations.
