---
hub: moments
record_id: STORY-ANGLE-000049
slug: what-real-delegation-requires-from-systems
title: What real delegation requires from systems
description: "You decide" only holds when systems let someone act, record it and keep work moving while you are away. Five things delegation needs from software.
lead: "You decide" is sincere, but delegation only holds when systems let someone act, record what they did and keep work moving when they are away. Five things delegation needs from software, and what it returns to owners and the people they trust.
category: Human Agency
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Human Agency
thematic_domain: human_agency
human_situation: An owner delegates routine decisions to a trusted staff member but remains involved daily because the systems do not give the delegate the access, limits, records and cover needed to act alone.
human_dividend: Autonomy and time: the delegate can carry responsibilities from start to finish, and the owner stops being the route for routine decisions, reviewing a record at a time of their choosing.
trade_off: Wider access carries risk; audit records can feel like surveillance; configuration takes effort; limits need revisiting; systems cannot create trust that is absent.
epistemic_state: HYPOTHESISED: the autonomy and time effects of system-supported delegation are inferred from the mechanism and from security and vendor documentation, not from a South African study of owner delegation.
sources:
  - least privilege - Glossary - CSRC | https://csrc.nist.gov/glossary/term/least_privilege
  - Set up approval users - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-set-up-approval-users
  - Learn about the audit logs in Microsoft Entra ID - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-audit-logs
  - Get started with Power Automate approvals - Power Automate | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
related:
  - The owner who can't decide without the spreadsheet wizard | /moments/the-owner-who-cant-decide-without-the-spreadsheet-wizard/
  - Why good judgement gets buried under process | /moments/why-good-judgement-gets-buried-under-process/
  - The manager who can't act without the founder | /moments/the-manager-who-cant-act-without-the-founder/
summary: "You decide" is sincere, but delegation only holds when systems let someone act, record what they did and keep work moving when they are away. Five things delegation needs from software, and what it returns to owners and the people they trust.
layout: plain
---
"You decide," an owner might say. "I trust you." It is a generous thing to say, and usually sincere. A week later the same owner is still being copied on every purchase order, still being asked to unlock a customer account, still checking the bank app to see what was paid. The trust was real. The delegation was not, or not completely.

Delegation is often discussed as a matter of character: whether the owner can let go, whether staff are ready to step up. Those things matter. But in a business that runs on software, delegation also has to be built. If the systems do not allow someone to act, show what they did and catch the occasional mistake, then "you decide" stays a sentence rather than an arrangement. This piece looks at what systems need to provide before delegation can hold, and what that returns to the people on both sides of it.

## Why good intentions do not carry the load

Most owners who struggle to delegate are not reluctant to share work. They are reluctant to lose sight of it. If a payment, a discount or a refund happens without them, they want to know it was right. When the only way to know is to be involved, they stay involved.

That is a reasonable instinct, not a character flaw. The problem is that it is usually satisfied by the owner's personal attention rather than by the system. Mellorca's guide on [how to know whether your business depends too much on one person](/insights/how-to-know-whether-your-business-depends-too-much-on-one-person/) sets out the warning signs. This piece is about what replaces the owner's attention when delegation is designed properly.

## Five things delegation needs from systems

### 1. Permission that fits the job

The person taking on a responsibility needs access to do it, and not much more. Security practice has a name for this. The NIST glossary defines [least privilege](https://csrc.nist.gov/glossary/term/least_privilege) as restricting access privileges to the minimum necessary to accomplish assigned tasks. That sounds like a restriction, but in delegation it works the other way: it lets an owner grant real access without handing over every key, which makes granting it easier.

### 2. Limits written into the tools

"You can approve purchases up to R20,000" is a clear delegation. It is much more robust if the system enforces it. Microsoft's Business Central documentation, for example, describes [approval users](https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-set-up-approval-users) with sales and purchase amount limits, where requests above a person's limit route to their approver. The limit stops being something the delegate must remember and the owner must police.

### 3. A record nobody has to compile

The owner's need to know what happened can be met by a record rather than by involvement. Microsoft's documentation on Microsoft Entra [audit logs](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/concept-audit-logs) describes system-generated records of changes to users, groups and applications, which cannot be changed or deleted. Accounting and banking systems keep similar trails of who approved and posted what. When the owner can look back at any time, they no longer need to look at everything as it happens.

### 4. Cover when someone is away

Delegation that depends on one delegate simply moves the bottleneck. Systems can name substitutes: the same Business Central page describes substitute approvers who act when the usual approver is unavailable. Microsoft's [Power Automate](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) documentation describes approvals where the first response from any of several approvers completes the request. Either way, work keeps moving when one person is on leave or ill.

### 5. A way to catch and correct mistakes

Delegates will sometimes get things wrong, as owners do. Delegation holds when mistakes are visible early and can be corrected without drama: a weekly exceptions report, a sample review of approvals, a clear route to reverse a transaction. Knowing that errors will surface makes trust easier to extend.

## An illustrative practice

Consider an illustrative example: a Polokwane veterinary practice with twenty staff. This is a hypothetical scenario. The owner, a vet, wants the practice manager to handle supplier orders, staff leave and routine refunds. In principle that is agreed. In practice the practice manager cannot place orders above a small amount because the supplier portal account is in the owner's name, cannot approve leave in the payroll system without the owner's login, and has no way to show the owner what she has refunded other than forwarding emails.

So the owner remains involved. Over a quarter, the practice works through the five points: the practice manager gets her own supplier login with an order limit, a leave-approver role in payroll, and refund permission in the practice system with a weekly report to the owner. A senior receptionist is named as substitute for leave approvals. Within a few months, the owner sees a weekly summary instead of a daily stream of questions.

## The human tax when delegation is incomplete

For the **delegate**, incomplete delegation taxes **autonomy**. They carry responsibility without the means to act, and spend time asking, waiting and relaying. For the **owner**, the tax is **time**: the hours spent on decisions they meant to hand over, plus the time spent briefing the person who was supposed to take them.

Both taxes are inferences from the mechanism rather than measured findings. People experience them differently; some owners enjoy staying close to detail, and some delegates prefer a slower handover. The concern is the case where both people want the delegation to work and the systems prevent it.

## What changes first, and the business outcome

The first change is that requests stop arriving at the owner. The delegate acts within limits, the system records it, and the owner reviews a summary at a time of their choosing.

The business becomes faster and more resilient. Decisions are made close to the work. The business can continue when the owner is away, which Mellorca explores from the owner's side in [why holidays still need a laptop in the suitcase](/moments/why-holidays-still-need-a-laptop-in-the-suitcase/). Processes are less exposed to any one person leaving, the theme of [designing workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/).

## The human dividend

The dividends are **autonomy** and **time**. Autonomy for the delegate, who can carry out a responsibility from start to finish and be recognised for doing it well. Time for the owner, who stops being the route through which routine decisions pass.

There is a further, quieter dividend. Delegation that rests on systems rather than on constant attention changes the relationship between the two people. Trust no longer has to be demonstrated daily by the owner watching and the delegate reporting. It is built into how the work runs, and can be checked without being performed.

## The trade-offs

- **Access always carries risk.** More people with more permissions means more ways for mistakes or misuse to happen. Least privilege, limits and logging reduce that risk, but do not remove it. Mellorca's impact piece on [uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/) explains what happens when access is granted without these controls.
- **Records can feel like surveillance.** An audit trail meant to give the owner confidence can feel to the delegate like being watched. Agreeing openly what is reviewed, and why, helps.
- **Setup takes effort.** Configuring roles, limits and substitutes across several systems takes time and sometimes outside help.
- **Limits need revisiting.** Thresholds set today will be too low or too high as the business changes.
- **Systems cannot create trust from nothing.** If the owner does not trust the delegate's judgement, no configuration will fix that. Systems make trust easier to extend; they do not replace it.

## Why it matters

Delegation is often described as letting go. In practice it is closer to building something that can hold weight without you. When systems carry permission, limits, records and cover, the people involved are free to do what delegation promised: one to act, the other to step back. Mellorca's pattern on [when staff need to ask who approves what](/patterns/when-staff-need-to-ask-who-approves-what/) shows how much friction disappears when that structure exists.
