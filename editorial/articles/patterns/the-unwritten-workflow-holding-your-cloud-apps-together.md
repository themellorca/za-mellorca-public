---
hub: patterns
record_id: PAT-042
slug: the-unwritten-workflow-holding-your-cloud-apps-together
title: The Unwritten Workflow Holding Your Cloud Apps Together
description: A form emails an inbox, someone posts it in a chat group, a thumbs-up means approved and a coordinator creates the project. When separate cloud tools are linked only by habits and notifications, the real process is invisible, fragile and hard to hand over.
lead: A form emails an inbox, someone posts it in a chat group, a thumbs-up means approved and a coordinator creates the project. When separate cloud tools are linked only by habits and notifications, the real process is invisible, fragile and hard to hand over.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Work moves between separate cloud applications through chat messages, forwarded emails, notifications and personal routines that are not documented or recorded in any system, and new staff learn the process by watching others.
primary_identification: An unwritten connecting workflow: the real process runs across several SaaS tools and is held together by habits and messages rather than designed, recorded steps.
commercial_value_dimensions: Resilience, capacity, risk and scalability
sources:
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - Guide to Slack Workflow Builder | https://slack.com/help/articles/360035692513-Guide-to-Slack-Workflow-Builder
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
related:
  - When the Next Step Waits for Someone to Check Another System | /patterns/when-the-next-step-waits-for-someone-to-check-another-system/
  - When Your Website Promises What Your Back Office Cannot See | /patterns/when-your-website-promises-what-your-back-office-cannot-see/
  - When APIs Exist but the Business Still Works Manually | /patterns/when-apis-exist-but-the-business-still-works-manually/
summary: A form emails an inbox, someone posts it in a chat group, a thumbs-up means approved and a coordinator creates the project. When separate cloud tools are linked only by habits and notifications, the real process is invisible, fragile and hard to hand over.
layout: plain
---
## Observable condition

Ask how a new client request is handled and you will get the official answer: it comes in through the website form, goes into the CRM and becomes a project in the project tool. Watch what actually happens and the picture is different. The form sends an email to a shared inbox. Someone posts a screenshot of it in a WhatsApp group. A manager replies with a thumbs-up, which everyone understands to mean the request is approved. A coordinator then creates the project, attaches files from a personal cloud folder and sends a calendar invite to book the kick-off.

None of these steps is written down. No single tool records them. Yet the business relies on them every day. Each cloud application does its own job well, and the workflow that links them is carried by notifications, chat messages, emoji, forwarded emails and habits that new staff learn by watching others.

An illustrative example: a Pretoria marketing agency with about twenty staff ran on six subscription tools. When its most experienced coordinator resigned, client requests began to stall. The tools were all still there, but the coordinator had been the one who knew that a certain type of email meant a project needed creating, which chat group to post it in and whom to tag. The process had lived in her routine.

## Realisation

When a business adopts separate cloud tools for forms, email, chat, projects, files and billing, the process does not disappear. It moves into the spaces between those tools. Because none of the tools is responsible for the whole flow, the flow is held together by people's knowledge of what to do when a certain notification appears.

That has a consequence that is easy to miss: the real workflow becomes invisible to the business's own records. Microsoft describes process mining as a way to understand how processes actually run by extracting event data from systems of record. It can only see what the systems record. A thumbs-up in a chat group or a forwarded email that prompts someone to act leaves little or no trace in the systems that hold the official process.

Many cloud tools now offer their own workflow features. Slack's Workflow Builder, for example, can automate routine steps and connect to other apps. These features can help, but only once someone has decided what the workflow is. Without that decision, each tool's automation tends to copy one fragment of the unwritten process.

**Realisation prompt:** if you watched one client request from start to finish, how many steps would happen in chat, email or someone's memory rather than in a system?

## Identification

This is a pattern of an **unwritten connecting workflow**: the real process runs across several cloud applications, held together by notifications, messages and personal routines that are not documented or recorded in any system. The visible symptoms are work that depends on particular people, approvals that happen in chat, and processes that new staff struggle to learn. The common assumption is that the business's tools define its process. The structural cause is that each tool was adopted for a function, and nobody designed the flow between them.

This is close to the condition where [staff become the integration between software platforms](/patterns/when-your-staff-become-the-integration-between-software-platforms/). That article looks at the people doing the stitching. This one looks at the process itself, which exists only as a set of habits and is therefore hard to see, improve or hand over.

## Diagnosis

- **Tools were bought for functions, not for flows.** A form tool for capture, a chat tool for talk, a project tool for delivery. Each choice made sense on its own; the process between them was never designed.
- **Chat became the control layer.** Approvals, priorities and handovers happen in messages because chat is fast and everyone is there, but it does not create a record in the systems that matter.
- **Notifications act as triggers.** Staff respond to emails and alerts as signals to act in another tool. If a notification is missed, filtered or goes to the wrong person, the work stops.
- **Knowledge lives in routines.** The rules, such as which requests need approval and which go straight through, are carried by experienced staff and not written down.
- **Personal information spreads.** Client details move through chat groups, personal folders and forwarded emails, outside the systems where access is controlled.

## Commercial impact

The commercial value at stake is resilience, capacity, risk and scalability.

An unwritten workflow is fragile. When the person who carries it is away, leaves or is simply busy, work stalls. Growth makes the problem worse: more requests mean more notifications and messages, and the chance of something being missed rises with volume. Adding staff helps less than expected, because each new person must learn the unwritten rules by observation.

There is also compliance exposure. Section 19 of the Protection of Personal Information Act requires a responsible party to secure the integrity and confidentiality of personal information through appropriate, reasonable technical and organisational measures. Client information copied into chat groups and personal folders is harder to secure, track and remove. The Insight on [why work gets lost between teams](/insights/why-work-gets-lost-between-teams/) describes how these gaps lose work as well as data.

Finally, the business cannot improve what it cannot see. Managers may conclude that the tools are at fault and buy another, adding a further gap to an already invisible process.

## Common misidentification

A common response is to choose a single tool to replace the others. Without first making the workflow explicit, the new tool tends to be configured to mirror the official process, and the unwritten steps simply re-form around it.

Another response is to ban chat for work. Chat is useful for conversation; the problem is using it to approve, assign and hand over work that should be recorded elsewhere.

A third is to treat the issue as a training gap. Training new staff in an undocumented process passes the habits on but does not make the process any more robust.

## Possibility

In a better state, the connecting workflow is written down, owned and partly automated. A form submission creates a record in the CRM directly. Approval happens through a defined step that is recorded, even if the request to approve arrives in chat. Projects are created from approved requests with files stored in a shared, controlled location. Chat remains the place for conversation, while the systems hold the decisions and the status.

For the agency, the change began with a one-page map of how a client request really moved, built by sitting with the coordinator before she left. That map became the specification for connecting the form to the CRM and the CRM to the project tool, with approval recorded as a field rather than an emoji.

## Intervention

1. **Observe, do not ask.** Follow several real requests from start to finish and note every message, notification and personal step. The Insight on [mapping a workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/) offers a practical method.
2. **Write down the unwritten rules.** Record which requests need approval, who approves, what signals the next step and where files go.
3. **Move decisions into systems.** Approvals, assignments and status changes should be recorded in the system that owns the work, not only in chat.
4. **Connect the main flow.** Use the tools' integrations or a workflow tool to carry the common path from capture to delivery without a person forwarding it.
5. **Bring personal information back under control.** Store client data and files in shared, access-controlled locations and stop routine use of personal folders and chat groups for them.
6. **Name an owner for the end-to-end flow.** Someone should be responsible for the process across tools, and for updating the map when it changes.

## Practical diagnostic questions

- Could you hand a new employee a written description of how a client request moves through your tools?
- Which approvals or handovers happen in chat or by email reply?
- If your most experienced coordinator left tomorrow, which steps would stop?
- Where does client information end up outside your main systems?
- How many tools does one request touch, and which of them knows its full status?

## Bottom line

When separate cloud tools each do their own job, the process that links them often survives only as habits, notifications and chat messages. That unwritten workflow is fragile, hard to scale and invisible to the business's own records. Making it explicit, recording decisions in systems and connecting the main path turns a set of personal routines into a process the business owns.
