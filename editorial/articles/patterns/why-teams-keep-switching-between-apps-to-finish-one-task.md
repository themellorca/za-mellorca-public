---
hub: patterns
record_id: PAT-031
slug: why-teams-keep-switching-between-apps-to-finish-one-task
title: Why teams keep switching between apps to finish one task
description: When one routine task needs several applications, people bridge the gaps by switching screens. Map common tasks and bring what they need into one view.
lead: When one routine task needs several applications, people bridge the gaps by switching screens. Mapping common tasks and bringing what they need into one view removes the switching.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Staff move between several applications, logins and messages to complete a single routine task such as an address change.
primary_identification: Task-fragmentation problem: one unit of work is spread across applications organised by function, so people supply the connection by switching.
commercial_value_dimensions: productivity, accuracy, speed of service, training effort, staff experience
sources:
  - How Much Time and Energy Do We Waste Toggling Between Applications? | https://hbr.org/2022/08/how-much-time-and-energy-do-we-waste-toggling-between-applications
  - Overview of task mining - Power Automate | https://learn.microsoft.com/en-us/power-automate/task-mining-overview
  - What is single sign-on in Microsoft Entra ID? - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on
  - Microsoft Teams Developer Platform - Teams | https://learn.microsoft.com/en-us/microsoftteams/platform/overview
related:
  - Why staff keep a spreadsheet between two business systems | /patterns/why-staff-keep-a-spreadsheet-between-two-business-systems/
  - Why information has to be copied from one system to another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
  - When disconnected systems let the business act on old information | /patterns/when-disconnected-systems-let-the-business-act-on-old-information/
summary: When one routine task needs several applications, people bridge the gaps by switching screens. Mapping common tasks and bringing what they need into one view removes the switching.
layout: plain
---
## Observable condition

A customer emails to change a delivery address. To deal with it, the service agent opens the email, switches to the order system to find the order, switches to the customer database to update the address, opens the courier portal to see whether the parcel has been collected, goes back to the order system to add a note, opens the team chat to tell the warehouse, and finally returns to the email to reply. Seven screens, several logins and a few minutes of searching, for one small request. Then the next email arrives and the circuit starts again.

Nobody thinks of this as a problem. It is just how the job works. Every application is useful, and each one holds something the agent needs. But completing a single task requires visiting most of them, carrying information between them in the agent's head or clipboard.

## Realisation

Businesses usually buy software by function: one system for orders, one for customers, one for deliveries, one for messages. Staff, however, work by task. A task like changing an address, approving a refund or booking a job cuts across several functions at once. When the systems are organised by function and the work is organised by task, the person in the middle bridges the gap, one switch at a time.

The realisation is that the cost is not only the seconds spent moving between windows. Each switch means finding the right record again, re-orienting, remembering what was just seen and checking that the details match. Researchers writing in Harvard Business Review studied how often employees toggle between applications in the course of a day, in an article titled [How Much Time and Energy Do We Waste Toggling Between Applications?](https://hbr.org/2022/08/how-much-time-and-energy-do-we-waste-toggling-between-applications) The question in that title is worth asking in any business that runs on several systems.

Realisation prompt: choose the three most common tasks in one team. For each, count the applications needed from start to finish and the number of times someone moves between them.

## Identification

This is a task-fragmentation problem: a single unit of work is spread across several applications, none of which presents the task as a whole, so people provide the missing connection by switching between them.

It is related to [when your staff become the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/), which looks at people carrying data between systems in general. This pattern focuses on the shape of individual tasks and the switching they demand. It is also distinct from interruption by notifications, discussed in [the cost of constant interruptions and context switching](/impact/pain-employees-interrupted-messages-notifications-context-switching/). Here the switching is not an interruption; it is built into the task itself.

## Diagnosis

The visible symptom is staff moving constantly between applications. The common assumption is that this is the price of having good specialist tools. The structural causes are usually these:

- **Tools chosen by function, not by task.** Each purchase solved one department's need without considering the tasks that cross departments.
- **No shared view.** No screen brings together the customer, order, delivery and history needed for common tasks.
- **Separate identities and records.** The same customer has a different reference in each system, so each switch involves a new search.
- **Separate sign-ins.** Sessions expire at different times, adding login steps to the circuit.
- **Communication outside the workflow.** Telling another team means leaving the system to send a message, which then has no link back to the record.
- **Integration that moves data but not work.** Systems may share some fields overnight, but actions still have to be taken in each one.

## Commercial impact

The commercial value at stake is productivity, accuracy, speed of service and staff experience.

- **Productivity.** Time spent navigating is time not spent resolving. Across many tasks a day, it adds up.
- **Accuracy.** Information carried between screens by memory or copy and paste can be wrong or incomplete, especially when the agent is busy.
- **Speed of service.** Customers wait while staff assemble the picture from several places.
- **Training.** New staff must learn several systems and the unwritten routes between them before they can work alone.
- **Staff experience.** Constant switching is tiring and makes simple work feel complicated.

The effect should be measured in the business's own context, by timing common tasks and counting switches.

## Common misidentification

A frequent response is to replace everything with one large system. Occasionally that is right, but it is expensive and risky, and a single system rarely fits every function well. The opposite response is to accept switching as unavoidable. A third is to add yet another tool, such as a dashboard that shows data but still requires actions to be taken elsewhere. The more useful question is which tasks matter most, and how to bring what each needs into one place.

## Possibility

In a stronger state, the most common tasks can be completed from one place. The agent sees the customer, their orders and delivery status together, makes the change once and the other systems are updated automatically. Notifications to other teams are sent from within the workflow and linked to the record.

Staff sign in once; Microsoft's guide to [single sign-on in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/what-is-single-sign-on) describes users signing in with one set of credentials and opening every assigned application without signing in again. Workplace platforms increasingly support bringing task-specific workflows to where people already work; Microsoft's [Teams developer platform overview](https://learn.microsoft.com/en-us/microsoftteams/platform/overview) describes extending Teams for task-specific workflows and integration with enterprise systems. The specialist systems remain, but they work behind the task rather than in front of it.

## Intervention

1. **Pick the high-volume tasks.** Identify the ten tasks each team performs most often.
2. **Map the switching.** For each, record every application visited, in order, and what is read or changed there. Microsoft's [overview of task mining](https://learn.microsoft.com/en-us/power-automate/task-mining-overview) describes an application analytics report that shows which applications teams spend the most time in, which can support manual observation.
3. **Agree a shared identifier.** Make sure each customer or order can be found by the same reference everywhere.
4. **Bring data to the task.** Build or configure a view that shows what the task needs from each system.
5. **Make one action update many systems.** Use integration so that a change made once flows to every system that needs it. What that should look like in practice is set out in [what a good system integration actually does](/insights/what-a-good-system-integration-actually-does/).
6. **Centralise sign-in.** Reduce separate logins through single sign-on.
7. **Re-measure.** Time the same tasks again and count switches.

## An illustrative example

The following is illustrative, not a client case. A Polokwane online pet-supplies retailer maps its five most common customer-service tasks and finds each involves between four and seven applications. It connects its online shop, order system and courier account, and configures a single customer screen showing orders, deliveries and notes. Address changes are now made once and pushed to the courier automatically. Agents still use the underlying systems for unusual cases, but routine requests are handled in one place.

## Practical diagnostic questions

- How many applications does your most common task require?
- Is there any single screen that shows everything needed for that task?
- Can the same customer be found by the same reference in every system?
- How many separate sign-ins does a typical employee need each day?
- When a change is made in one system, does it reach the others automatically?

## Bottom line

When finishing one task means visiting several applications, the business is organised by software function while its people work by task. Mapping the most common tasks, bringing what they need into one view and letting one action update every system removes the switching without replacing the specialist tools that do their jobs well.
