---
hub: insights
record_id: INS-109
slug: which-process-steps-should-be-removed-before-automation-six-candidates-and-a-test
title: Which Process Steps Should Be Removed Before Automation
description: Automating a step you did not need only makes it permanent. Here are six kinds of step to question before building anything, and a four-question test to apply.
lead: Automating a step you did not need only makes it permanent. Here are six kinds of step to question before building anything, and a four-question test to apply.
category: Automation and Workflow
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Automation and Workflow
sources:
  - Explore the Power Automate home page - Power Automate | https://learn.microsoft.com/en-us/power-automate/getting-started
  - Who makes an application to process Special Personal Information? | https://www.inforegulator.org.za/popia/
  - Operational excellence quick links - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/
related:
  - How to Automate Notifications Without Creating Noise | /insights/how-to-automate-notifications-without-creating-noise-tiers-recipients-and-channels/
  - How to Automate Approvals Without Losing Control | /insights/how-to-automate-approvals-without-losing-control/
  - How to Find Steps That Exist Only Because the System Is Bad | /insights/how-to-find-steps-that-exist-only-because-the-system-is-bad/
summary: Automating a step you did not need only makes it permanent. Here are six kinds of step to question before building anything, and a four-question test to apply.
layout: plain
---
A distribution business decides to automate its order confirmation process. The map shows eleven steps. Three of them are a clerk printing the order, a supervisor initialling it, and the clerk scanning the initialled copy into a folder nobody opens. The project team builds automation for all eleven, because that is what the process does today. The result is a fast, reliable system that prints, initials and scans at machine speed, and has the same cost and the same delays as before.

Automation makes a step cheaper to repeat. It does not make the step worth doing. The cheapest moment to remove a step is before it is automated, because afterwards it carries a build cost, a maintenance cost and a reluctance to touch something that now "works".

## Why removal comes first

Tools such as those described in Microsoft's [Power Automate documentation](https://learn.microsoft.com/en-us/power-automate/getting-started) are designed to run repeated tasks without a person doing each one. That is useful, and it is also the risk: whatever you give a flow, it will repeat faithfully, including the step that exists only because of a system limitation from 2014 or a manager who has since left. We covered the general version of this problem in [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/). This article is narrower. It asks which individual steps deserve to be taken out before any building starts.

## Six kinds of step that often should go

Walk through the mapped process one step at a time and ask what each one is for. Most removable steps fall into one of six types.

- **Duplicate checks.** A figure is verified by the person who captured it, then again by a supervisor, then again by finance, and nobody can recall the last time a check found an error. Keep the check that sits closest to where errors actually occur and ask whether the others add anything.
- **Approvals with no real decision.** If an approval is granted in more than, say, 98 out of 100 cases, and nobody has ever declined one on its merits, it is a signature rather than a control. Replace it with a rule (approve automatically below a stated amount) and review a sample afterwards.
- **Re-keying and copying between documents.** Moving the same facts from an email to a spreadsheet to a system is a symptom of missing integration, not a task to automate. Fix the flow of the data instead, a point developed in [when copy and paste is really an integration problem](/insights/when-copy-and-paste-is-really-an-integration-problem/).
- **Reports nobody reads.** A step that produces a weekly summary for a distribution list is a candidate for removal if no one has acted on it in a quarter. Ask the recipients; silence is an answer.
- **Workarounds for old limits.** Steps added because an earlier system could not do something, or because of a one-off incident, often outlive the cause.
- **Handoffs that only forward.** A person who receives work, adds nothing and passes it on is a delay. Check whether the work can go directly to the person who acts.

## A short test for each step

For every step on the map, ask four questions and write the answers beside it.

1. What would go wrong if this step vanished tomorrow, and for whom?
2. When did this step last change an outcome, such as catching an error, stopping a payment or altering a decision?
3. Does a later step already do the same job?
4. Does a law, contract, audit requirement or customer commitment require it?

A step with no real consequence, no recent effect and a later duplicate is a strong candidate for removal. A step required by law or contract stays, though you can still ask whether it needs a person to do it. In South Africa, retention and record-keeping obligations come from several sources, including tax and company law and the Protection of Personal Information Act, so confirm the requirement itself rather than relying on the belief that "we have always kept a signed copy". The [Information Regulator's POPIA page](https://www.inforegulator.org.za/popia/) is a starting point for personal information; your accountant or attorney can confirm the rest.

## Evidence beats opinion

People defend steps they perform. The clerk who prints and files is not being obstructive; she has been told this matters. To avoid a standoff, collect evidence first. Pull thirty recent cases and count how many times each suspect step changed anything. Record the time each step adds, including waiting. Our article on [finding rework inside a business process](/insights/how-to-find-rework-inside-a-business-process/) describes practical ways to gather that evidence without an elaborate project.

Then present findings as a question: "In thirty orders, the supervisor's initials were never withheld. What is this step protecting us from?" Sometimes there is a good answer you did not know, such as a past fraud case. Better to learn it now than after the step has been deleted or, worse, hard-coded.

## Remove in a way you can reverse

Removal does carry some risk, so manage it. Do not delete a step across the whole business on a Monday. Instead:

- Pilot the shorter process with one team or one product line for a defined period.
- Name in advance what you will watch, such as error rates, returns, complaints or audit queries, and who will look at it.
- Keep the old step documented so that it can be restored if the pilot shows a real problem.
- Where the step protected against a rare but serious risk, replace it with a lighter control, such as a weekly sample check, rather than nothing.

## What to automate once the process is shorter

After removal, the remaining steps are the ones that earn their place. Some will still be good candidates for automation, and the decision becomes easier because the process is shorter and its purpose is clearer. For ranking those candidates, our guide to [ranking manual tasks before you automate any of them](/insights/how-to-rank-manual-tasks-before-you-automate-any-of-them/) picks up where this article stops. You will usually find the build smaller, the testing quicker and the number of exceptions lower than in the original plan.

## Practical next actions

1. Take the process you plan to automate next and list every step on one page, including the informal ones that nobody wrote down.
2. For each step, answer the four questions above and mark the steps with no recent effect and a later duplicate.
3. Pull thirty recent cases and count how often each marked step changed an outcome; share the counts with the people who perform the steps.
4. Check the legal or contractual basis for any step that people say is mandatory, and record who confirmed it.
5. Pilot the shortened process with one team for a month, name the measures you will watch, and decide the review date before you start.
