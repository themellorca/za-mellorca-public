---
hub: moments
record_id: STORY-ANGLE-000083
slug: when-remote-work-depends-on-one-office-machine
title: When Remote Work Depends on One Office Machine
description: Flexible working stops at the one task that needs a particular computer in the office. How a single machine quietly limits where people can work, and what can widen the choice.
lead: Flexible working stops at the one task that needs a particular computer in the office. How a single machine quietly limits where people can work, and what can widen the choice.
category: Autonomy and Access
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Autonomy and Access
thematic_domain: human_agency
human_situation: A capable employee travelling or working from home cannot finish a task because the files or program sit on one computer in the office.
human_dividend: Autonomy and optionality: people can choose where to work on a given day, and the choice no longer hinges on one machine in one building.
trade_off: More access means more exposure and needs strong security; always-available work can become always-expected work; cloud and remote access add cost and complexity; the machine's long-time guardian may feel diminished.
epistemic_state: HYPOTHESISED: reasoned from vendor documentation and security guidance, not from a study of South African firms; the example is illustrative.
sources:
  - Introduction to SharePoint and OneDrive in Microsoft 365 for administrators - SharePoint in Microsoft 365 | https://learn.microsoft.com/en-us/sharepoint/introduction
  - Remote Desktop Services overview in Windows Server | https://learn.microsoft.com/en-us/windows-server/remote/remote-desktop-services/welcome-to-rds
  - Small organisations guide to cyber security | https://www.ncsc.gov.uk/collection/small-business-guide
  - Small organisations guide to cyber security | https://www.ncsc.gov.uk/collection/small-business-guide/backing-your-data
related:
  - When Rural Connectivity Decides Who Can Work Remotely | /moments/when-a-weak-signal-decides-who-gets-flexible-work/
  - Why “I'll Do It Tonight” Became the Default Plan | /moments/why-ill-do-it-tonight-became-the-default-plan/
  - The Freedom That Comes From Knowing Where Things Stand | /moments/the-freedom-that-comes-from-knowing-where-things-stand/
summary: Flexible working stops at the one task that needs a particular computer in the office. How a single machine quietly limits where people can work, and what can widen the choice.
layout: plain
---
In many small businesses there is one computer that quietly matters more than the rest. It sits under a desk or on a shelf in the office. It holds the accounting package, or the stock spreadsheet, or the folder of quotes that nobody ever copied anywhere else. People call it "the office PC" or "Linda's machine". Its importance only becomes obvious when somebody is not in the office.

A project manager is travelling to a client in another province and needs last year's pricing file. A bookkeeper is working from home because a child is ill and needs to post a payment before the bank's cut-off. An owner is waiting at an airport and has to approve a supplier invoice that is sitting in a program on that one machine. In each case the person is capable, informed and ready to work. The thing that stops them is a computer in a building they are not in.

## Remote work that is only partly remote

Businesses often describe themselves as flexible about where people work. In practice, flexibility can be conditional. It may work for email and chat, and then stop abruptly at the one task that needs the machine in the office. The person has the freedom to be elsewhere only for as long as nothing important is required.

Mellorca regards this as a structural condition more than a personal one. The dependency sits in the way the business has stored its work, not in the habits of its people. A single machine that holds files and programs which others cannot reach is a single point of dependency, in the same way that a single supplier or a single internet line is. Mellorca has described the connectivity version of this in [single internet connection and business downtime risk](/impact/single-internet-connection-business-downtime-risk/).

## What it takes from people

The human tax here is access, and with it a measure of autonomy and optionality. Access is the ability to reach what one needs, when one needs it. Autonomy is the ability to decide where and when to do a piece of work. Optionality is the existence of real alternatives: working from the client's boardroom, from a hospital waiting room, from home on a day when the roads are bad.

When a machine in the office is the only route to key work, the choices narrow. People either travel to it, ask someone who is there to do the task for them, or wait. Each of these is a small cost. Together they shape how a business thinks about absence. Leave becomes something to be arranged around the machine. Travel becomes something that must be scheduled between deadlines. Mellorca has written about the personal side of this in [why holidays still need a laptop in the suitcase](/moments/why-holidays-still-need-a-laptop-in-the-suitcase/).

## An illustrative example

Consider an illustrative case, not a real one: a small architectural practice in Stellenbosch with six staff. Drawings and project folders live on a desktop computer in the senior technologist's office, which also runs the specialist drawing software. Two architects often visit sites and clients. On those days they can see email on their phones, but they cannot open a drawing, look up a previous specification or check a consultant's markup.

The practice sees this as a minor irritation. In reality it shapes decisions. Site visits are bunched so that nobody is out of reach for too long. The technologist rarely takes leave in busy periods, because she is the only person who knows where everything is. When load-shedding interrupts the office or the machine fails, the whole practice is affected for as long as the problem lasts.

None of the people involved is doing anything wrong. They are working with the arrangement they inherited, which began as a sensible shortcut on one desktop and slowly became the centre of the business.

## What could realistically change

There is no single answer, and the right one depends on the software, the files and the connection. Several options are worth weighing.

1. **Move files to a shared cloud location.** Microsoft's documentation describes SharePoint and OneDrive as cloud-based services that help organisations share and manage content, with sync and mobile apps for working on files from different devices. For many businesses, files are the larger part of the problem, and moving them removes a lot of dependence on one machine.
2. **Give remote access to the programs that cannot move.** Some software is tied to a particular computer. Microsoft's Remote Desktop Services documentation describes how users can connect over the network to a full desktop or to specific applications, with processing centralised and only the screen sent to the user. It also describes a gateway that provides encrypted access without opening internal ports, and support for multi-factor authentication. This route is technical, and it needs proper set-up and maintenance, but it can keep a legacy program usable from elsewhere.
3. **Protect what is on the machine.** The UK National Cyber Security Centre's guide for small organisations covers backups, protecting devices and accounts, and spotting scams, and stresses that cyber security should not rest with one person. If the machine is going to be reachable from outside, its security matters more than before. Mellorca covers the wider point in [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/).
4. **Write down what the machine does.** A list of the programs, files, logins and scheduled tasks that depend on it is the first step to reducing the dependency, and it is useful even if nothing else changes.
5. **Test remote working before it is needed.** Pick a quiet day and ask someone to work from home using only what they would have on the road. The gaps show up quickly.

The broader pattern is described in [how to know whether your business depends too much on one person](/insights/how-to-know-whether-your-business-depends-too-much-on-one-person/); the same reasoning applies to a single machine.

## What changes first, and the business outcome

The first change is that a request that used to require a trip, or a favour, can simply be done. Files are found from wherever the person is. A task that used to be saved for when someone was back at the desk is finished the same day.

For the business, the outcome is less vulnerability to a single failure. If one machine fails or is stolen, the files are elsewhere. Staff absences matter less, because the work does not live in one room. These are plausible effects of removing a single point of dependency, not measured results for any particular company.

## The human dividend

The dividend is autonomy and optionality. People can choose where to work on a given day, and the choice does not hinge on whether the machine in the office happens to be switched on. A parent can work from home. A manager can stay an extra day at a client. A person who is unwell but able to work a few hours can do so without driving to the office, or can decide not to, knowing the business will not stall.

It does not say that people should work remotely more often, or that remote work is better. Many people prefer the office, and for them the dividend is simply a more resilient place to come to. The point is that the choice should belong to the person and not to the location of a computer.

## The trade-offs

More access means more exposure. Files and programs that can be reached from outside the office can be reached by people who should not reach them. The NCSC's small-business guidance notes that small organisations are as likely as larger ones to face online crime, and that about half of those it addresses suffer a cyber incident each year. Remote access therefore needs strong accounts, up-to-date software and a plan for lost devices.

It can blur boundaries. When work is available everywhere, it can be expected everywhere. A business that opens remote access without agreeing what is reasonable may find that autonomy turns into an obligation to be reachable. Mellorca explores that tension in [the quiet cost of always being reachable](/moments/the-quiet-cost-of-always-being-reachable/).

It can shift cost and complexity. Cloud services have monthly fees, and remote desktop set-ups need skilled administration. A tool that is simple in the office can become a project once it has to work from a hotel or a home connection, which in turn depends on data and signal.

Finally, moving off the old machine may mean changing habits. The person who was the guardian of that computer may feel that their role has been reduced. It helps to involve them in the design and to recognise the knowledge they carry.

## Why it matters

A business that says it supports flexible work should be able to show that the work can actually go where the people go. Mellorca's interpretation, offered as a hypothesis, is that a single, unspoken dependency on a particular machine often limits flexibility more than any policy does. Removing it will not suit every business, and it should be done with care for security and for the people who know the old arrangement best. Where it is done well, what changes for the person is simple and easy to remember: the work is wherever they are.
