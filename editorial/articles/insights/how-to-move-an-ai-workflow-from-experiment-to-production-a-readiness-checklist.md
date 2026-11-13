---
hub: insights
record_id: INS-189
slug: how-to-move-an-ai-workflow-from-experiment-to-production-a-readiness-checklist
title: How to Move an AI Workflow From Experiment to Production
description: A promising AI test is not yet something the business can rely on. Here are the decisions, tests and controls that turn an experiment into a workflow people can depend on every day.
lead: A promising AI test is not yet something the business can rely on. Here are the decisions, tests and controls that turn an experiment into a workflow people can depend on every day.
category: AI and Automation
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: AI and Automation
sources:
  - https://www.nist.gov/itl/ai-risk-management-framework | https://www.nist.gov/itl/ai-risk-management-framework
  - https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/strategy | https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/strategy
  - https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments
summary: A promising AI test is not yet something the business can rely on. Here are the decisions, tests and controls that turn an experiment into a workflow people can depend on every day.
layout: plain
---
A professional services firm in Johannesburg builds a tool that drafts first responses to client queries using a large language model. In the test, a partner tries thirty sample emails and is impressed. Two weeks later the tool is switched on for the whole client service team. Within a month, it has sent a draft quoting an outdated fee schedule, nobody can say which version of the instructions produced it, and the monthly bill for the AI service is three times what anyone expected.

The experiment was a success. The move to production was not planned. That gap is common, and it has less to do with the AI than with the ordinary disciplines any business-critical workflow needs. We explore the underlying reasons in [why AI pilots do not automatically become business operations](/insights/why-ai-pilots-do-not-automatically-become-business-operations/). This article is the practical checklist.

## Decide what success means before you scale

An experiment proves something is possible. Production needs a definition of good enough. Write down, in business terms, what the workflow must achieve and how you will know: for example, "drafts accepted with minor edits at least 80% of the time, no draft sent without review, response time under four working hours". Microsoft's Cloud Adoption Framework guidance on [AI adoption](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ai/strategy) makes a related point at the strategy level: leaders should define the business outcomes AI is expected to support and how the value of AI investments will be measured, otherwise experiments can multiply without producing enough value.

Also write down what failure looks like. Which errors are tolerable, which are embarrassing and which would cause real harm to a customer, to compliance or to money? That classification drives every decision below.

## Test on real cases, including the awkward ones

Pilot tests are usually run on cases the builder chose. Before production, assemble a test set drawn from real work, including the messy cases: incomplete requests, unusual customers, documents in poor condition, questions that should be refused or escalated. Keep the set and rerun it every time you change the instructions, the model or the data the workflow uses. A change that improves the average case can quietly break a rare but important one.

The US National Institute of Standards and Technology's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) is a voluntary framework intended to help organisations build trustworthiness into how AI systems are designed, developed, used and evaluated. You do not need to adopt it formally, but its structure, which includes understanding the context of use and measuring performance and risks, is a helpful prompt for questions a pilot usually skips.

## Put the human checkpoints where the risk is

Most AI workflows that reach production in a small or mid-sized business should have a person approving actions with external consequences, at least at first. Decide explicitly which outputs can flow straight through, which need review and which the AI should never produce. Our article on [designing human approval checkpoints for AI workflows](/insights/designing-human-approval-checkpoints-for-ai-workflows/) covers how to place those checkpoints without making the reviewer a bottleneck.

Make the reviewer's job easy: show the AI's output alongside the source information it used, so checking takes seconds rather than a re-do of the work. Track how often reviewers change outputs and why. That data tells you whether checkpoints can be relaxed later or need to be tightened.

## Control the inputs and the versions

A production AI workflow depends on several things that change: the model, the instructions or prompts, the reference documents it draws on and the business data it reads. Treat each as a versioned component. Record which version of each was in use when an output was produced, so you can explain a bad result and roll back a bad change.

Reference information needs an owner. The fee-schedule error in the example above happened because the AI was drawing on a document nobody was responsible for updating. Every source the workflow reads should have a named owner and a review date, and changes should be tested against the test set before they go live.

## Release gradually

Switching an AI workflow on for everyone at once removes your chance to catch problems while they are small. Microsoft's Well-Architected guidance on [safe deployment practices](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments) recommends progressive exposure, starting with a small group and expanding in stages, with health checks before each stage and an immediate halt when problems are detected. The same logic applies to a business workflow: start with one team or one customer segment, watch the measures you defined, and expand only when they hold.

Have a fallback ready. If the AI service is unavailable or the workflow is paused, people need to know how to do the work manually, and the manual path should still exist in practice, not just on paper.

## Monitor quality, cost and behaviour after launch

Production monitoring for AI workflows needs three views. First, quality: acceptance rates, reviewer edits and complaints, sampled and read by a person regularly. Second, cost: usage-based pricing can grow quickly with volume or with longer inputs, as we discuss in [how to monitor AI usage costs before they surprise you](/insights/how-to-monitor-ai-usage-costs-before-they-surprise-you/). Set a budget alert. Third, behaviour: a log of what the workflow did, with which inputs and versions, as described in [keeping a reliable record of what your AI agents did](/insights/how-to-keep-a-reliable-record-of-what-your-ai-agents-did/).

If your workflow processes personal information about customers or staff, the same obligations apply as for any other system, including South African data protection law. Check what data is sent to the AI service, where it is processed and whether it is retained by the provider.

## Name an owner and a review routine

Finally, someone must own the workflow in production: watching the measures, approving changes, maintaining the test set and deciding when to expand or pull back. Without an owner, the workflow drifts as models, data and business rules change around it. A short monthly review of quality, cost and incidents is usually enough for a single workflow.

## Practical next actions

1. Write a one-page definition of success and failure for the workflow, including which errors are tolerable and which are not.
2. Build a test set of at least fifty real cases, including awkward ones, and rerun it after every change to the model, instructions or reference data.
3. Decide which outputs need human approval, and give reviewers the source information beside each output.
4. Record versions of the model, instructions and reference documents for every output, and give each reference source a named owner.
5. Release to one team first, with a cost alert, a quality sample and a documented manual fallback, and expand only when the measures hold.
6. Appoint a production owner and hold a monthly review of quality, cost and incidents.
