---
hub: insights
record_id: INS-131
slug: which-manual-tasks-are-better-left-manual-a-sorting-test
title: Which Manual Tasks Should Stay Manual?
description: Not every manual task is a problem. A sorting test for deciding which work is better kept in human hands, based on judgement, frequency, stakes and relationship value.
lead: Not every manual task is a problem. A sorting test for deciding which work is better kept in human hands, based on judgement, frequency, stakes and relationship value.
category: Automation Strategy
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Automation Strategy
sources:
  - What Is Workflow Automation? - IBM | https://www.ibm.com/think/topics/workflow-automation
  - What Is Human In The Loop (HITL)? - IBM | https://www.ibm.com/think/topics/human-in-the-loop
  - What Is Business Process Automation? - IBM | https://www.ibm.com/think/topics/business-process-automation
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - How to Build Automation Around Exceptions | /insights/how-to-build-automation-that-expects-exceptions-from-the-start/
  - How to calculate the real cost of a repetitive task | /insights/how-to-calculate-the-real-cost-of-a-repetitive-task/
  - What Should Be Automated Inside a CRM? | /insights/crm-tasks-worth-automating-first/
summary: Not every manual task is a problem. A sorting test for deciding which work is better kept in human hands, based on judgement, frequency, stakes and relationship value.
layout: plain
---
Automation advice usually runs in one direction: find the manual work and remove it. That instinct is useful, because plenty of manual work is plain waste. But applied without discrimination it produces some expensive mistakes, such as an automated reply that offends a long-standing customer, a rule that approves a payment nobody would have approved by eye, or a flow that took six weeks to build for a task done four times a year.

The better question is not "what can we automate?" but "what is worth automating, and what is better left with people?" This article gives a sorting test for answering it, so that the effort goes where it pays and human attention stays where it matters.

## Manual does not mean broken

There is a difference between manual work that exists because nobody has fixed it, and manual work that exists because a person's judgement, relationship or accountability is the point. The first kind is avoidable. The second is the work. A piece on [the difference between necessary human work and avoidable manual work](/insights/the-difference-between-necessary-human-work-and-avoidable-manual-work/) draws this line in more depth.

IBM's overview of workflow automation notes that rule-based logic can be as effective as more sophisticated tools for addressing workflow inefficiencies. The word that matters is rule-based. If you cannot write down the rule, you cannot automate the task reliably, and if the rule keeps changing, you will spend more on maintenance than you save.

## Six questions that sort tasks

For each manual task you are considering, ask these questions. A task that scores well on most should stay manual, at least for now.

### 1. Does it require judgement that cannot be written as a rule?

Deciding whether to extend credit to a long-standing client who is two weeks late, reading the tone of a complaint, or choosing which of three imperfect suppliers to use all involve weighing context. If you ask the person how they decide and the answer is "it depends", automation will either flatten the nuance or fail on the cases that matter most.

### 2. How often does it happen?

A task done fifty times a day is a candidate for automation. A task done quarterly is not, unless the stakes are high. Be honest about the arithmetic: if a task takes thirty minutes a month and an automation will take forty hours to build and a few hours a year to maintain, the payback is measured in years. Work through the numbers using [how to calculate the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/), and include maintenance, not only build time.

### 3. How costly is a mistake?

Automation makes errors faster and more consistent. For a low-stakes task, such as sending a meeting reminder, that is acceptable. For a task where a mistake means a wrongly paid supplier, a mis-filed SARS submission or an incorrect payslip, you want a human to verify, even if software prepares the work. Preparing the work and approving it are separate steps, and only the first usually needs to be automated.

### 4. Does the human contact itself carry value?

A phone call to a key account after a service failure is manual on purpose. So is a personal note when a major client renews. Replacing these with a template removes the signal that the business cares. A good test is to ask whether the customer would prefer to know a person did it. If so, keep it manual, and support the person with better information instead.

### 5. Is the process stable and understood?

If the task changes every few months, or the people who do it each do it differently, you do not yet have a process to automate. Automating it locks in whichever version you happened to capture, a danger explored in [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/). Stabilise first; decide afterwards.

### 6. Does the person learn something by doing it?

Some tasks are how a team learns its own business. A junior bookkeeper who reconciles accounts by hand begins to recognise odd patterns. A new account manager who writes up each client call builds a picture of the portfolio. Automating that work may also remove the training. Keep it manual, or automate only after people have built the skill.

## Where human judgement should stay inside automated work

The choice is not always all or nothing. IBM describes human-in-the-loop as a process in which a human actively participates in the operation, supervision or decision-making of an automated system, with the goal of getting the efficiency of automation without losing the nuance and oversight of people. It notes that automated workflows can go wrong in many ways, and that humans can impose alerts, reviews and failsafes where outcomes are high stakes.

For most small businesses this means designing a hybrid: software does the gathering, matching and drafting, and a person decides. Examples include a system that matches bank deposits to invoices and presents only the unmatched ones for a person to resolve; a tool that drafts a supplier payment run for approval; or a template that prefills a client email for a person to personalise. How to place those human checks sensibly is covered in [designing human approval checkpoints for AI workflows](/insights/designing-human-approval-checkpoints-for-ai-workflows/).

## Legal and fairness reasons to keep a person involved

Some decisions carry obligations. The Protection of Personal Information Act includes provisions on automated decision-making: in general, a person may not be subject to a decision with legal consequences for them, or that substantially affects them, which is based solely on the automated processing of personal information intended to profile them. There are exceptions, and the details depend on the circumstances, so take advice before automating decisions about credit, employment or access to services. As a practical matter, a human review step for decisions that significantly affect individuals is both a safeguard and good customer practice.

## Do not confuse stay manual with stay unmeasured

Deciding to keep a task manual is not the same as ignoring it. Manual tasks that stay should still be written down, given an owner, and checked for waste around them. Often the real saving is not in automating the task itself but in removing the steps around it: the retyping before it, the searching for information, the chasing afterwards. [How to rank manual tasks before you automate any of them](/insights/how-to-rank-manual-tasks-before-you-automate-any-of-them/) shows how to compare the candidates on a common footing, and [how much manual work is hiding inside your business](/insights/how-much-manual-work-is-hiding-inside-your-business/) helps find the tasks nobody has listed.

## A quick scorecard

Score each task from 1 to 5 against each question, where 5 means the task is a strong reason to keep it manual.

- Judgement needed (5 means it cannot be written as a rule).
- Rarity (5 means it happens only a few times a year).
- Cost of error (5 means a mistake is serious).
- Value of human contact (5 means the customer would notice).
- Instability (5 means the process keeps changing).
- Learning value (5 means people grow by doing it).

A total above about twenty points to keeping the task manual. Between twelve and twenty, consider a hybrid. Below twelve, it is likely a good candidate for automation. The numbers are not magic; their purpose is to start a conversation with the people who do the work, who usually know the answers already.

## An illustrative example

The following is a hypothetical case. A Bloemfontein accounting practice reviewed ten recurring tasks. Chasing missing documents from clients scored low on every question: it was frequent, rule-based, low-stakes and impersonal, so it was automated with scheduled reminders. Capturing bank statement lines scored the same and was automated with a data feed. Reviewing a client's year-end adjustments scored high on judgement, error cost and learning, so it stayed manual, with software preparing a summary. The monthly call to the practice's five largest clients scored high on human contact, so it stayed exactly as it was. The practice saved around a day a week and lost nothing it wanted to keep.

## The point

Automate the frequent, rule-based, low-stakes work that nobody learns from. Keep human hands on the work that needs judgement, carries serious consequences, builds relationships or teaches the team. Where the answer is mixed, let software prepare and a person decide. A business that makes this choice deliberately ends up with both more capacity and more care.
