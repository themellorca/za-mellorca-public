---
hub: insights
record_id: INS-122
slug: when-task-mining-is-worth-using
title: When Task Mining Is Worth Using
description: Task mining records what people do on their desktops to reveal how tasks are really performed. It suits some questions very well and others poorly, and it carries privacy duties.
lead: Task mining records what people do on their desktops to reveal how tasks are really performed. It suits some questions very well and others poorly, and it carries privacy duties.
category: Process Improvement
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Process Improvement
sources:
  - https://learn.microsoft.com/en-us/power-automate/task-mining-overview | https://learn.microsoft.com/en-us/power-automate/task-mining-overview
  - https://docs.uipath.com/task-mining/automation-cloud/latest/user-guide/about-task-mining | https://docs.uipath.com/task-mining/automation-cloud/latest/user-guide/about-task-mining
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
summary: Task mining records what people do on their desktops to reveal how tasks are really performed. It suits some questions very well and others poorly, and it carries privacy duties.
layout: plain
---
The claims team at a Johannesburg short-term insurance broker spends much of its day moving between an insurer portal, the broker's policy administration system, email and a spreadsheet of open claims. The operations manager suspects a lot of the work is copying information from one screen to another, and that each of the eight team members does it slightly differently. Workshops have not helped: people describe the process as they think it runs, not as they actually click through it. A vendor has suggested task mining.

Task mining can answer exactly this kind of question. It can also be an expensive, intrusive way to learn something a few hours of observation would have shown. Knowing which situation you are in saves money and protects trust.

## What task mining is

Task mining records what people do on their computers while performing a task, then analyses those recordings to show the steps, variations and time involved. Microsoft's [overview of task mining](https://learn.microsoft.com/en-us/power-automate/task-mining-overview) in Power Automate describes it as capturing detailed steps of tasks performed on users' desktops, and using the analysis to identify inefficiencies, common mistakes and steps that could be automated. It can produce a process map showing which activities take longest, how many variations exist, and which applications people spend most time in.

UiPath's [Task Mining documentation](https://docs.uipath.com/task-mining/automation-cloud/latest/user-guide/about-task-mining) describes recording each action a person performs, including mouse clicks, keystrokes and hotkeys, capturing variations of the task, and merging them into a combined picture. Notably, it frames the tool around a known task that an analyst or subject matter expert has already identified as worth investigating.

## How it differs from process mining

Process mining analyses event logs from business systems: when an order was created, approved, shipped. It shows the flow of cases across a process, but not what happens on screen between those events. Task mining fills that gap at the desktop level. Our article on [what process mining can reveal that workshops cannot](/insights/what-process-mining-can-reveal-that-workshops-cannot/) covers the system-level view. The two complement each other: process mining shows where cases wait; task mining shows what people do while they work on them.

## When task mining is worth using

- **The task is high-volume and screen-based.** It happens many times a day, mainly through applications rather than phone calls or physical work.
- **The work crosses several applications.** Copying between portals, systems and spreadsheets is where task mining reveals most, because no single system's log captures it.
- **People do it differently.** You suspect variation between staff, and want to find the fastest or most accurate approach to standardise on.
- **You are preparing to automate.** Detailed step sequences, including the exceptions, are what automation builders need. Both vendors position task mining as a route to automation recommendations.
- **Interviews have not produced a reliable picture.** People genuinely cannot describe every click, and observation would take too long across enough cases.

## When it is probably not worth it

- **The task is low-volume.** If it happens a few times a week, sitting with someone for an hour will tell you as much.
- **The problem is waiting, not working.** If cases spend days waiting for approvals or documents, the issue is in the flow between people, which system logs or a simple tracker show better.
- **The work is mostly judgement or conversation.** Recording clicks says little about how an underwriter assesses a risk.
- **You already know the answer.** If everyone agrees the team re-types every claim from the insurer portal, the next step is fixing that, not measuring it more precisely.
- **Trust is fragile.** If staff are likely to see recording as surveillance, the damage to morale may outweigh what you learn.

Our guide on [finding the manual work nobody is measuring](/insights/how-to-find-the-manual-work-nobody-is-measuring/) describes lighter methods to try first.

## Privacy and consent are not optional

Task mining captures screens, and screens show personal information: client names, ID numbers, claim details, bank details. It also captures information about the employees being recorded. South Africa's [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) sets minimum conditions for processing personal information, which apply to both. Before any recording:

- Define the specific task and purpose, and record only that.
- Tell staff what will be recorded, why, for how long, who will see it, and that it will not be used for individual performance management. Get agreement, ideally from volunteers.
- Use the tool's settings to exclude applications, blur or mask sensitive fields, and limit screenshots.
- Agree where the recordings are stored, including whether they leave the country, and when they will be deleted.
- Involve your information officer before you start, not after.

## Run a narrow pilot

If task mining looks worthwhile, start with one task, a few volunteers and two or three weeks of recording. Decide in advance what decision the results will inform, such as which steps to automate or which variation to standardise. Review the results with the people recorded; they will explain variations the data cannot, such as a workaround for a portal that times out. Our article on [finding automation opportunities from operational evidence](/insights/how-to-find-automation-opportunities-from-operational-evidence/) explains how to turn findings into a ranked list of changes.

## Measure what it led to

The value of task mining lies in the changes it prompts, not in the maps it produces. Judge it on whether it led to a standardised method, a removed step or an automation that saved measurable time. If a pilot produces impressive charts but no change, the tool was not the constraint. For a broader estimate of how much manual work is at stake, see [how much manual work is hiding inside your business](/insights/how-much-manual-work-is-hiding-inside-your-business/).

## Practical next actions

1. Identify one high-volume, screen-based task that crosses several applications and varies between staff.
2. Try observation and a short interview first, and decide whether task mining would tell you something they cannot.
3. If it would, agree purpose, scope, masking, storage and deletion with your information officer, and inform and involve the staff concerned.
4. Run a two-to-three-week pilot with volunteers, and review the findings with them.
5. Turn the findings into specific changes and measure the time saved, rather than judging the tool by its reports.
