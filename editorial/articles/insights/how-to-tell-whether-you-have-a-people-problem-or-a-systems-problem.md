---
hub: insights
record_id: INS-002
slug: how-to-tell-whether-you-have-a-people-problem-or-a-systems-problem
title: How to Tell Whether You Have a People Problem or a Systems Problem
description: A diagnostic framework to distinguish people-related inefficiencies from system design or process flaws, with actionable steps.
lead: A diagnostic framework to distinguish people-related inefficiencies from system design or process flaws, with actionable steps.
category: Operations
published_date: 2026-10-01
updated_date: 2026-10-01
eyebrow: Operations
sources:
  - Dr. W. Edwards Deming and Profound Knowledge – Part 2 – SPC | https://www.spcforexcel.com/knowledge/dr-w-edwards-deming/profound-knowledge-part-2/
  - Google SRE - Blameless Postmortem for System Resilience | https://sre.google/sre-book/postmortem-culture/
related:
  - Why Your CRM Is Not the Problem You Think It Is | /insights/why-your-crm-is-not-the-problem-you-think-it-is/
  - What Your Recurring Problems Are Telling You About Your Systems | /insights/what-your-recurring-problems-are-telling-you-about-your-systems/
  - Why Work Gets Lost Between Teams | /insights/why-work-gets-lost-between-teams/
summary: A diagnostic framework to distinguish people-related inefficiencies from system design or process flaws, with actionable steps.
layout: plain
---
Understanding when inefficiency stems from people versus systems is a practical skill for leaders who balance improvement with steady operations. The distinction matters because remedies that target the wrong root cause waste time and erode trust. Retraining a team whose real problem is a broken handoff produces frustration. Buying new software for a team whose real problem is unclear ownership produces an expensive version of the same confusion.

A well-structured diagnostic helps teams avoid chasing symptoms and instead focus on durable improvements that scale across the organisation. This article sets out why the confusion happens, a lightweight diagnostic you can apply in current cycles, and the trade-offs involved in acting on the answer.

## Understanding the distinction

People problems arise when roles, incentives, training and collaboration patterns misalign with the work that needs to be done. Systems problems show up when the process logic, data flows or automation architecture create friction that no single person can correct by effort alone. The aim is to map observed friction to one or both categories and to avoid conflating symptoms with root causes.

The word "systems" here means more than software. It includes the process design, the information people are given, the tools they use, the way work is handed between teams and the decision rights that govern exceptions. A spreadsheet that three teams edit without rules is a system. So is an approval chain that depends on one manager's inbox.

## Why the distinction is so often misread

Most operational failures are visible at the point where a person acts. Someone sent the wrong invoice, missed a deadline or forgot a step. Because the failure has a face, the explanation tends to be personal. The underlying design that made the mistake likely is harder to see.

W. Edwards Deming's distinction between common-cause and special-cause variation is a useful way to think about this. As summarised in [this explanation of Deming's profound knowledge](https://www.spcforexcel.com/knowledge/dr-w-edwards-deming/profound-knowledge-part-2/), common-cause variation arises from the way the process was designed and is managed, and reducing it requires changing the system, which is management's responsibility. Special causes are abnormalities outside the normal process. Deming estimated that 94% of problems are due to common causes. That is his estimate rather than a measured statistic for any business, but the direction of the argument is important: most recurring problems are built into the way work is organised.

Google's site reliability engineering guidance reaches a similar conclusion from a different starting point. Its approach to [blameless postmortems](https://sre.google/sre-book/postmortem-culture/) assumes that people involved in an incident acted with good intentions on the information they had, and asks why that information was incomplete or incorrect. Its central observation is that you cannot fix people, but you can fix systems and processes to better support people making the right choices.

Neither source says that individual performance never matters. They say that blaming individuals for system-generated problems leaves the cause in place and teaches people to hide problems.

## Mechanisms that disguise systems problems as people problems

- **Heroic workarounds:** capable people compensate for poor design, so the design looks adequate until they leave. This is why [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).
- **Handoffs that depend on memory:** when the next step relies on someone remembering to pass information on, failures look like carelessness. In reality they are [broken handoffs](/insights/broken-handoffs-are-systems-problems/).
- **Invisible status:** if progress is only visible by asking, chasing looks like poor follow-through, when the real gap is missing information, as explored in [why chasing people for updates is a systems failure](/insights/why-chasing-people-for-updates-is-a-systems-failure/).
- **Conflicting targets:** people optimise for what they are measured on. If two teams have incompatible measures, the friction between them is a design outcome.

The reverse also happens. Some genuine people problems are disguised as systems problems: unclear accountability, a skills gap after a role change, or a team that has not agreed how it works. Replacing tools will not resolve these.

## Diagnostic steps

1. Inventory friction points across the value stream and categorise each by whether it primarily involves skills or ownership (people) or process and integration (systems).
2. Assess whether changes in one area would reduce multiple friction points, indicating a systemic design issue.
3. Prioritise interventions that yield durable improvements: standard operating procedures, governance and interfaces that reinforce shared standards.
4. Test small, reversible changes to confirm the direction of impact before broad rollout.

### Five tests for a specific problem

For each recurring friction point, ask these questions in order:

- **The substitution test:** would a different competent, trained person in the same role run into the same problem? If yes, the cause is mostly systemic.
- **The recurrence test:** does the problem appear repeatedly, across people or teams? Repetition points to design; a single unusual event points to a special cause.
- **The information test:** did the person have the correct, current information at the moment they acted? If not, fix how information reaches them before addressing their judgement.
- **The workaround test:** are people maintaining private spreadsheets, notes or reminders to get the job done? Workarounds show where the system does not support the work.
- **The clarity test:** is it written down who owns the outcome, what good looks like and who decides on exceptions? If not, the gap is in role design, which sits between people and systems.

Most real problems are mixed. The useful output of the diagnostic is not a single label but a split: which part of this friction would disappear with better design, and which part needs coaching, clarity or a capability change.

## Practical implications and trade-offs

Teams that focus on people issues without corresponding system adjustments often see temporary gains that fade. Conversely, over-investing in software or automation without clarifying roles and workflows can increase cognitive load and reduce adaptability. The healthiest approach blends targeted people changes with clarifying system design, data standards and decision rights.

Several trade-offs deserve to be stated openly:

- **Speed against durability:** a conversation with an individual is quick, while redesigning a process is slower. The quick fix is reasonable for a special cause, but repeating it for a common cause is expensive over time.
- **Standardisation against judgement:** tighter standards reduce variation, but over-specifying work can remove the discretion skilled people need for genuine exceptions.
- **Accountability against blamelessness:** a systems view does not remove accountability. It moves accountability for recurring problems towards the people who design and manage the process.
- **Cost of change against cost of tolerance:** not every systems problem justifies redesign. [Separating urgent systems problems from merely annoying ones](/insights/how-to-separate-urgent-systems-problems-from-merely-annoying-ones/) helps decide where change earns its cost.

## What to do next

Ask five questions: where does the bottleneck most consistently appear, who should own the remedy, what data would verify improvement, which standard should anchor the process, and how will you measure long-term stability?

Then pick one recurring problem that has been treated as a performance issue and run the five tests on it with the people involved. If the answers point to the system, change one element, observe the result over a few cycles and only then decide on broader change. If they point to people, address it directly and fairly, with clear expectations and support.

For further reading on operational design, the quality-management tradition that follows Deming and the reliability-engineering practice of blameless review are both worth exploring. The underlying lesson is consistent: fix what makes good people fail before concluding that the people are the problem.
