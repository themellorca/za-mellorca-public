---
hub: insights
record_id: INS-336
slug: what-a-system-runbook-should-contain
title: What a System Runbook Should Contain
description: A runbook turns a recurring or urgent system task into steps anyone qualified can follow. Here are the sections a useful one needs, a worked example and how to keep it accurate.
lead: A runbook turns a recurring or urgent system task into steps anyone qualified can follow. Here are the sections a useful one needs, a worked example and how to keep it accurate.
category: Process Documentation
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Process Documentation
sources:
  - https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/ops_ready_to_support_use_runbooks.html | https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/ops_ready_to_support_use_runbooks.html
  - https://sre.google/sre-book/introduction/ | https://sre.google/sre-book/introduction/
summary: A runbook turns a recurring or urgent system task into steps anyone qualified can follow. Here are the sections a useful one needs, a worked example and how to keep it accurate.
layout: plain
---
At 7.40 on a Monday morning the order integration between a Johannesburg wholesaler's online store and its accounting system stopped posting invoices. The one person who understood the integration was on leave in the Drakensberg with poor signal. Two colleagues spent the morning guessing: restarting things, re-entering orders by hand, and eventually creating duplicate invoices for 37 customers. When the specialist came back, the fix took twenty minutes. It had been needed before, twice, and both times it had lived only in her head.

A runbook would have turned that morning into a short, calm exercise. It is a written procedure for operating or recovering a specific system, clear enough that a competent colleague can follow it without the usual expert in the room. Most small and mid-sized businesses do not have them, because they seem like something only large IT departments need. In practice, the smaller the team, the more a runbook is worth.

## What a runbook is, and is not

The AWS Well-Architected guidance on [using runbooks](https://docs.aws.amazon.com/wellarchitected/latest/operational-excellence-pillar/ops_ready_to_support_use_runbooks.html) describes a runbook as a documented process to achieve a specific outcome, in the form of steps that someone follows, and notes that at its simplest it is a checklist to complete a task. It lists the anti-patterns runbooks are meant to prevent: relying on memory, different people doing the same task in different ways, and runbooks drifting out of sync with the systems they describe.

A runbook is not a system manual or an architecture document. Those explain how something is built. A runbook tells someone what to do: restart this, check that, escalate here. It is also narrower than a standard operating procedure for a business process. An SOP describes how the business handles a customer refund; a runbook describes how to fix the refund integration when it stops.

## The sections every runbook needs

- **Purpose and trigger:** what outcome the runbook achieves and when to use it. "Use when invoices from the web store have not appeared in the accounting system for more than 30 minutes during business hours."
- **Owner and last tested date:** who maintains it and when someone last followed it successfully.
- **Impact and urgency:** what the business cannot do while the problem lasts, and how quickly it must be fixed.
- **Access and tools required:** which accounts, permissions and tools are needed, and where credentials are kept (a password manager entry, never the password itself).
- **Checks before acting:** how to confirm the problem is what it seems, such as checking the integration's error log or the supplier's status page.
- **Numbered steps:** one action per step, with what the person should expect to see if it worked.
- **How to confirm success:** the specific check that shows the system is healthy again.
- **What not to do:** actions that make things worse, such as re-entering orders by hand before the queue has been cleared.
- **Escalation:** who to contact if the steps do not work, including supplier support details and contract references.
- **Aftercare:** what to tidy up afterwards, such as reconciling records created during the outage, and who to tell.

AWS recommends the same essentials: a clearly stated desired outcome, the necessary permissions and tools, guidance on error handling and escalation, and a named owner, with the runbook published in a central location.

## A worked example

Here is how the wholesaler's runbook might begin, in shortened form.

**Purpose:** restore posting of web store orders to the accounting system. **Trigger:** no new web invoices in accounting for 30 minutes during trading hours, or an alert from the integration. **Impact:** orders cannot be picked because dispatch works from accounting invoices. Fix within two hours.

**Steps:** (1) Open the integration dashboard and check the failed-message count. If it is zero, the problem is elsewhere; go to step 8. (2) Open the most recent error. If it reads "authentication failed", the accounting connection token has expired; go to step 3. (3) Reconnect the accounting app using the integration service account, stored in the password manager under "Accounting integration". (4) Select "retry failed messages". (5) Confirm that the failed count falls to zero and that the most recent order appears in accounting. Do not re-enter orders manually at any point.

Notice how specific this is. Each step has an expected result, and the most dangerous improvisation, manual re-entry that creates duplicates, is ruled out explicitly.

## Why it is worth the effort

Google's site reliability engineering book reports in its [introduction](https://sre.google/sre-book/introduction/) that recording best practices ahead of time in a playbook produced roughly a threefold improvement in mean time to repair, compared with improvising. It is careful to add that no playbook replaces people who can think on their feet, but that clear troubleshooting steps are valuable when a problem is urgent and stressful. Small businesses have even more to gain, because the alternative to a runbook is usually not a team of engineers but one person on leave.

## Which runbooks to write first

Start with the systems that would stop revenue or customer service if they failed, and the tasks that happen rarely enough that nobody remembers the steps. Typical first candidates are:

- Restoring a key integration, such as store to accounting or CRM to billing.
- Month-end or year-end system tasks that run once or twice a year.
- Adding and removing user access when staff join or leave.
- Restoring a file or record from backup.
- What to do when a critical software supplier has an outage.

Our guide to [identifying the systems your business actually depends on](/insights/how-to-identify-the-systems-your-business-actually-depends-on/) helps produce this list.

## Test it with someone else

A runbook written by the expert always makes sense to the expert. AWS advises validating a new runbook by having someone else on the team run it. Ask a capable colleague to follow it, ideally during a planned quiet period, while the author watches without helping. Every question they ask marks a gap in the document. Record the date of the successful test in the runbook itself.

## Keep it current

Runbooks decay when systems change and documents do not. Tie updates to change: whenever a system, integration, supplier or permission changes, the owner checks the affected runbooks before the change is closed. Our article on [managing small system changes](/insights/how-to-manage-small-system-changes-without-creating-chaos/) covers how to build that step into everyday work. Review each runbook at least once a year even if nothing has changed, and after every real use, adding anything that was missing.

Store runbooks in one central, searchable place that remains accessible when the system they describe is down. A runbook for restoring your intranet should not live only on the intranet. For the wider picture of reducing dependence on individuals, see [why key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/).

## Automate the steps that never change

Once a runbook has been followed a few times, some steps will be entirely mechanical. AWS recommends gradually automating runbooks, starting with short ones that are used often. Retrying failed messages, restarting a service or running a standard data check can often become a single button or an automatic action, leaving people to handle the judgement calls. Our article on [how silent automation failures damage operations](/insights/how-silent-automation-failures-damage-operations/) explains why the automated version still needs an alert and an owner.

## Practical next actions

1. List the five system problems or tasks that would cause the most disruption if the usual person were unavailable.
2. Write a runbook for the first one using the sections above, with an expected result for each step.
3. Have a colleague follow it without help, fix the gaps they find, and record the test date.
4. Store all runbooks in one central place that stays reachable when the systems they cover are down.
5. Add a check of affected runbooks to every system change, and review each runbook at least once a year.
