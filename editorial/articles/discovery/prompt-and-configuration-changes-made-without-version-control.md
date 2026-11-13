---
hub: discovery
record_id: DISC-462
slug: prompt-and-configuration-changes-made-without-version-control
title: Prompt and configuration changes made without version control
description: When prompts and model settings are edited in place with no history, changes cannot be explained or rolled back. How to put them under version control.
lead: When prompts, model settings and automation configuration are edited in place with no history, behaviour changes cannot be explained, reviewed or rolled back. How to bring them under version control.
category: AI, Automation & Agent Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: AI, Automation & Agent Operations
problem_domain: AI, Automation & Agent Operations
problem_owner: Automation or AI product owner, supported by the IT or platform lead
budget_owner: COO or head of operations, with IT budget for tooling
sources:
  - Prompt engineering - OpenAI API | https://developers.openai.com/api/docs/guides/prompt-engineering
  - The Twelve-Factor App | https://12factor.net/config
  - SP 800-128, Guide for Security-Focused Configuration Management of Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/128/upd1/final
related:
  - AI-generated decisions cannot be traced to source data | /discovery/ai-generated-decisions-cannot-be-traced-to-source-data/
  - Why AI tools fail without authoritative data | /discovery/why-ai-tools-fail-without-authoritative-data/
  - Business rules are hidden inside AI prompts | /discovery/business-rules-hidden-inside-ai-prompts/
summary: When prompts, model settings and automation configuration are edited in place with no history, behaviour changes cannot be explained, reviewed or rolled back. How to bring them under version control.
layout: plain
---
An AI assistant that drafted perfectly good client emails last month now produces replies that are too long and occasionally quote the wrong payment terms. An invoice automation that used to skip zero-value lines has started posting them. Nobody remembers changing anything, and nobody can prove they did not. In many businesses, the instructions that steer AI tools and the settings that control automations are edited directly in a web console, with no record of who changed what, when, or why.

This article looks at that operating condition: prompts, model choices and configuration values that change without version control. It explains why the problem is becoming more common, what it costs, and what a practical level of control looks like for a small or mid-sized business.

## The problem in plain language

A prompt is now a piece of production logic. It tells a model what role to play, what policy to follow, what tone to use and what to refuse. Configuration does the same job for automations: thresholds, schedules, mappings, model names, temperature settings, retry limits and approval amounts. When either is edited in place, the business loses three things at once: the ability to see what changed, the ability to review the change before it goes live, and the ability to go back to the version that worked.

The symptom is behaviour drift that nobody can explain. The cause is usually not one bad edit. It is the absence of any process that treats prompts and settings as things that need history.

## What you are actually trying to solve

Nobody asks for "prompt version control" until something has gone wrong. More often they ask why an AI tool started giving different answers, how to roll back an automation setting, or who changed a workflow. Behind those questions is a simple need: predictable behaviour from systems the business now depends on, and a way to answer the auditor's or the customer's question, "what was the system told to do on that date?"

## Evidence and system mechanism

Three mechanisms make this failure mode credible and common.

### Prompts and models both move

Model providers update and retire models, and prompt wording interacts with the model version in ways that are hard to predict. [OpenAI's prompt engineering guidance](https://developers.openai.com/api/docs/guides/prompt-engineering) recommends pinning production applications to specific model snapshots for consistent behaviour, and building tests and evaluation suites so that performance can be monitored as prompts are iterated or models are upgraded. The same guidance now suggests keeping prompt builders in application code near the feature they support, and notes that its separate stored-prompt objects are being wound down. The direction is clear: prompts belong with the rest of the versioned logic, not in a separate place where they can change unobserved.

### Configuration is not code, but it still needs control

The [Twelve-Factor App](https://12factor.net/config) defines configuration as everything likely to vary between deploys, such as credentials and environment-specific values, and argues for strict separation of configuration from code. That separation is sound, but it is often misread as "configuration does not need the same discipline as code". In practice, a changed approval threshold or a swapped model name can alter outcomes as much as a code change.

### Configuration management is a recognised control

[NIST SP 800-128](https://csrc.nist.gov/pubs/sp/800/128/upd1/final) describes security-focused configuration management as managing and monitoring system configurations to minimise organisational risk while supporting the business functions they serve. The principle carries over directly to AI and automation settings: a known baseline, controlled changes and monitoring for drift.

### Warning signs

- Prompts live in a vendor console or a chat window, and the only copy is the live one.
- Several people have edit rights to production automations, and changes are not logged anywhere a manager would look.
- Model names are set to a moving alias rather than a fixed version.
- When behaviour changes, the first step is a round of messages asking "did anyone touch this?"
- There is no test set of typical inputs that can be re-run after a change.

## Problem owner and why-now trigger

The problem usually belongs to whoever owns the automation or AI capability: an operations lead, an automation champion or a small internal development team. IT is often involved because it administers the platforms, but IT rarely writes the prompts.

The trigger is typically an automation backlog. As more processes are automated quickly, more people are given edit rights, and changes are made under time pressure. The second trigger is a visible incident: a customer receives an incorrect message, or a finance posting goes wrong, and the business discovers it cannot reconstruct what the system was configured to do at the time.

## Economic consequence

The direct cost is investigation time. Without history, diagnosing a behaviour change means comparing outputs by hand and interviewing colleagues. The indirect costs are larger: incorrect customer communications, rework in finance, and a gradual loss of trust that pushes staff back to manual checking. That checking quietly erodes the benefit the automation was meant to deliver, a pattern described in [how silent automation failures damage operations](/insights/how-silent-automation-failures-damage-operations/).

There is also a governance cost. If an AI tool gives advice or makes a decision that is later challenged, the business needs to show what instructions it was operating under. Without versioned prompts, that is guesswork.

## Root cause

The symptom is unexplained drift. The root causes are usually structural:

- **Prompts and settings are not treated as assets.** They are seen as text boxes, not as logic that needs an owner and a history.
- **Tooling encourages edit-in-place.** Many low-code and AI platforms make it easier to change production directly than to change a copy and promote it.
- **No separation of environments.** There is nowhere to try a change safely, so changes are tested in production.
- **No evaluation baseline.** Without a set of representative inputs and expected outcomes, nobody can tell whether a change improved or degraded behaviour.

This is the same family of problem as [uncontrolled configuration changes](/insights/why-uncontrolled-configuration-changes-create-operational-risk/) in general, made sharper because prompt behaviour is less predictable than a conventional setting.

## Practical intervention

1. **Inventory what steers behaviour.** List every production prompt, system message, model selection and material automation setting. Record where each lives and who can edit it.
2. **Move the source of truth into version control.** Store prompts and configuration files in a repository, or at minimum in a versioned document store, with each change carrying an author, a date and a reason.
3. **Pin versions.** Use fixed model versions in production and change them deliberately, as a reviewed release, not as a side effect of a provider update.
4. **Build a small evaluation set.** Twenty to fifty representative inputs with agreed acceptable outputs is often enough to catch obvious regressions. Re-run it on every change. The case for ongoing evaluation is made in [AI evaluations performed only before launch](/discovery/ai-evaluations-are-performed-only-before-launch/).
5. **Separate try from live.** Make changes in a test copy or development environment and promote them, so the production version is never the experiment.
6. **Restrict and log production edits.** Reduce who can change live settings, and make sure platform audit logs are kept and reviewed.

### Trade-offs

Every control adds friction. A one-person automation with low stakes may only need a dated change log and a saved copy of the previous prompt. Prompts that touch customers, money or compliance decisions justify full version control, review and evaluation. The goal is proportionate control, not a heavyweight release process for every wording tweak.

### An illustrative example

*Illustrative:* a Durban logistics company with around 80 staff uses an AI assistant to draft delivery-delay notices from tracking data. A dispatcher, trying to make messages friendlier, edits the system prompt to "always reassure the customer". Within a week, notices begin promising delivery dates the tracking data does not support. Because the prompt has no history, it takes several days to identify the change. With the prompt in a repository and a short evaluation set that includes a "delay unknown" case, the regression would have been caught before release, and rolling back would have taken minutes.

## Diagnostic questions

- Can you show the exact prompt and model version that produced a given output last month?
- Who can change production prompts or automation settings today, and is each change recorded?
- Is there a test set you re-run before a change goes live?
- If a change goes wrong, how long would it take to restore the previous version?
- Are model versions fixed, or do they change when the provider changes them?

## What good looks like

Every production prompt and material setting has a named owner, a version history and a reason recorded for each change. Model versions are pinned. Changes are made away from production, checked against an evaluation set and promoted deliberately. When behaviour changes, the team can compare versions and roll back in minutes. Auditors and customers can be told what the system was instructed to do on any given date.

## Where Mellorca fits

Mellorca's [business automation and AI workflows](/services/business-automation-ai-workflows/) work includes designing the change process around prompts and automation settings: inventory, repository structure, environment separation, evaluation sets and lightweight review. For businesses that want ongoing oversight, [managed digital operations](/services/managed-digital-operations/) can take on monitoring and change control for critical automations.

## Method note

This article describes a general operational pattern drawn from vendor documentation and established configuration-management guidance. It does not quantify the frequency or cost of prompt drift, because no reliable public figures were found. The example is illustrative and not based on a specific client.
