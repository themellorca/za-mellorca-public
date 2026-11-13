---
hub: impact
record_id: CPS-252
slug: automating-broken-process-without-simplifying-cost
title: Automating a broken process makes inefficiency run faster
description: Automating before simplifying locks in needless steps, multiplies exceptions and raises build costs. Simplify first, then automate what remains.
lead: Automating a process before simplifying it locks in unnecessary steps, multiplies exceptions and raises build and maintenance costs. Simplify first, then automate what remains.
category: Business Automation
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Business Automation
commercial_domain: Business Automation
primary_pain: Automating a broken process without simplifying it first
primary_cost_mechanism: Inflated build and maintenance cost, residual exception labour and faster error propagation
sources:
  - Reengineering Work: Don’t Automate, Obliterate | https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - Architecture strategies for enabling and implementing automation - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/automate-tasks
related:
  - From inbox to system by hand: The labour cost of retyping emails | /impact/copying-email-details-into-business-systems-admin-cost/
  - Manual automation triggers leave half the process manual | /impact/manual-automation-trigger-half-automated-process-cost/
  - Gathering information before work can start: The payroll cost of preparation | /impact/compiling-information-before-work-preparation-payroll-cost/
summary: Automating a process before simplifying it locks in unnecessary steps, multiplies exceptions and raises build and maintenance costs. Simplify first, then automate what remains.
layout: plain
---
## The tolerated pain

A process has been irritating everyone for years. Orders pass through four people, two spreadsheets and a printed approval form. The obvious modern answer is to automate it, so the business buys a workflow tool or commissions a developer and asks for the current process to be "digitised".

Six months later, the business owns an automated version of the same process. The approval form is now an electronic form, but it still goes to three approvers, two of whom always approve without reading. The spreadsheet reconciliation is now a scheduled script, but it still exists because two systems disagree on customer codes. Every exception the old process handled informally now needs a rule, a branch or a manual queue. The work runs faster, but much of what runs faster should not have existed.

The idea is not new. In a 1990 Harvard Business Review article, ["Reengineering Work: Don't Automate, Obliterate"](https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate), Michael Hammer argued that using technology to speed up existing processes leaves their underlying inefficiencies in place, and that companies should instead rethink how the work is done. More than three decades later, small and mid-sized businesses still make the same mistake, often because automation tools have become cheap and quick enough to make it easy.

## Why businesses automate before simplifying

- **Automation is visible progress.** A new tool going live is easy to announce. Removing an unnecessary approval step is not.
- **Nobody owns the whole process.** Each department knows its part, so the brief describes the current steps rather than the outcome the process exists to deliver.
- **Vendors and developers are paid to build.** The person automating the process is rarely asked to challenge it.
- **Workarounds look like requirements.** A step that exists only to fix an earlier error gets written into the specification as if it were essential.
- **Simplification needs decisions.** Removing a step means someone has to agree that the control it provided is no longer needed. That conversation is harder than buying software.

## Operational consequence

When a broken process is automated as it stands, the symptoms usually appear within months:

- the automation has many branches and special cases, and nobody fully understands them;
- a large share of cases still fall out to a manual exception queue;
- staff keep their old spreadsheets "just in case";
- small changes to the process need a developer, so they are delayed or not made;
- errors that used to be caught by a person noticing something odd now pass straight through.

The exception queue is the clearest signal. If an automation handles only the straightforward cases and humans handle the rest, the business may now be paying for both. That pattern is described in [why manual work persists when automation covers only the happy path](/discovery/manual-work-persists-because-automation-covers-the-happy-path/). Microsoft's Azure Well-Architected [guidance on automation](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/automate-tasks) points the same way, advising against automating tasks that need complex scripting to handle variability and noting that complex automation needing heavy maintenance is hard for operations teams to manage and troubleshoot.

## How the pain becomes money

- **Higher build cost:** every unnecessary step, variant and exception has to be designed, built and tested. Complexity in the process becomes complexity in the code.
- **Higher maintenance cost:** each branch must be maintained when systems change. Automations with many paths break more often and take longer to fix.
- **Labour that does not disappear:** the exception queue keeps people employed on work the automation was meant to remove.
- **Faster error propagation:** an automated step that applies a flawed rule applies it to every case, quickly. Errors that a person might have caught now reach customers, suppliers or the ledger.
- **Locked-in waste:** once a step is automated, it becomes harder to remove, because removing it now means changing software as well as habits.

## An illustrative comparison

This example is **illustrative**; all figures are assumptions. Imagine a Cape Town building-supplies distributor processing credit applications from new trade customers. The current process has 14 steps, including three approvals and two manual checks that exist because customer data is captured twice.

| Approach | Steps automated | Assumed build cost | Cases still handled manually | Assumed annual maintenance |
| --- | --- | --- | --- | --- |
| Automate as-is | 14 | R180,000 | About 35% | R45,000 |
| Simplify, then automate | 8 | R110,000 plus R25,000 for the redesign work | About 10% | R25,000 |

In this example, simplifying first costs less to build, costs less to maintain and leaves far fewer cases for staff to handle. The exact numbers will differ in every business. The direction usually does not: fewer steps and fewer variants mean less to build, less to break and less left over.

## Use evidence, not memory, to find the waste

Simplification works best when it is based on how the process actually runs, not how people remember it. Interviews and workshops are useful, but they tend to describe the intended process. System records describe the real one.

Process mining is one way to get that evidence. Microsoft's [overview of process mining in Power Automate](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) describes extracting event data from systems of record to visualise how processes actually run, compare them, find the root causes of inefficiencies and monitor performance indicators. Its customer-service example is identifying opportunities for standardisation to reduce rework. Smaller businesses do not need a dedicated tool to apply the principle: timestamps from email, the accounting system and the CRM, assembled in a spreadsheet, often reveal where work waits, loops or is redone. See [what process mining can reveal that workshops cannot](/insights/what-process-mining-can-reveal-that-workshops-cannot/).

## When it becomes commercially urgent

1. An automation project is about to be scoped, quoted or approved. This is the cheapest moment to simplify.
2. An existing automation has a growing exception queue or frequent breakages.
3. The automation's maintenance cost is approaching what the manual process cost.
4. Staff describe the automated process as slower or harder than the manual one it replaced.

## What better looks like

Before anything is automated, someone maps the process end to end and asks of each step: what is this for, what would happen if we removed it, and is it fixing a problem created earlier in the process? Duplicate captures are removed at source. Approvals are kept only where they change outcomes, with thresholds so that low-value cases flow through. Exceptions are counted and reduced before they are coded. Only then is the remaining, simpler process automated, with a clear failure path and an owner. The thinking is set out in more depth in [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/).

## Practical diagnostic and remediation steps

1. **Write down the outcome** the process exists to deliver, in one sentence.
2. **Map the current steps** using real cases, including the exceptions.
3. **Mark each step** as value-adding, control, or workaround for an earlier problem.
4. **Remove or fix workarounds at source** before writing any automation specification.
5. **Set approval thresholds** so that routine, low-risk cases need no approval.
6. **Measure the exception rate** before and after, and include it in the business case.
7. **Automate the simplified process**, and assign an owner to watch exceptions and failures.

Mellorca's [business automation service](/services/business-automation/) starts with this simplification step for exactly this reason. Where automations already exist, [the financial impact of silent automation failures](/impact/silent-automation-failures-financial-impact/) explains why monitoring matters once they are live.

## Bottom line

Automation multiplies whatever it is given. Applied to a clean process, it multiplies efficiency. Applied to a broken one, it multiplies waste, exceptions and maintenance, and makes them harder to remove later. The cheapest automation is often the one designed after a few unnecessary steps have been deleted.
