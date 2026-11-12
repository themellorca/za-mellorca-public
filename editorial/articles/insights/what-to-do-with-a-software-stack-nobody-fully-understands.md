---
hub: insights
record_id: INS-045
slug: what-to-do-with-a-software-stack-nobody-fully-understands
title: What to Do With a Software Stack Nobody Fully Understands
description: Many businesses run on a collection of systems that nobody can fully explain: built up over years, by different people, with little written down. A practical sequence for regaining control without breaking anything: secure access, map what runs, find what matters, check support, then simplify.
lead: Many businesses run on a collection of systems that nobody can fully explain: built up over years, by different people, with little written down. A practical sequence for regaining control without breaking anything: secure access, map what runs, find what matters, check support, then simplify.
category: Digital Operations
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Digital Operations
sources:
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
  - Identifying the critical assets in your organisation | https://www.ncsc.gov.uk/collection/board-toolkit/principle-a-risk-management/identifying-the-critical-assets-in-your-organisation
  - Fixed Lifecycle Policy - Microsoft Lifecycle | https://learn.microsoft.com/en-us/lifecycle/policies/fixed
  - Shadow IT guidance | https://www.ncsc.gov.uk/guidance/shadow-it
related:
  - What Good Digital Operations Look Like Before You Buy Anything New | /insights/what-good-digital-operations-look-like-before-you-buy-anything-new/
  - How to Rationalise Software Without Breaking the Business | /insights/how-to-rationalise-software-without-breaking-the-business/
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
summary: Many businesses run on a collection of systems that nobody can fully explain: built up over years, by different people, with little written down. A practical sequence for regaining control without breaking anything: secure access, map what runs, find what matters, check support, then simplify.
layout: plain
---
Ask a simple question about the systems in many established businesses and watch what happens. Why does this report run on that server? What happens if we turn off this account? Who set up the link between the online shop and the accounting package? Often the answer is a pause, a guess and a name of someone who left some years ago.

This is not unusual, and it is not anyone's fault in particular. Software stacks grow one reasonable decision at a time. An IT provider sets up one part, a former manager adds another, a team signs up for a tool, a developer builds a connection, and each piece makes sense on its own. After ten years the whole has never been described by anyone, because no one person ever built it.

The temptation, especially for a new owner or manager, is either to leave it alone because it still works, or to replace it wholesale because nobody understands it. Both are risky. The better path is a deliberate sequence that restores understanding first and makes changes second.

## Step one: change nothing until you can see

A stack nobody understands contains connections nobody knows about. Turning off an apparently unused account, server or subscription can stop something important in a place nobody expected. For the first few weeks, the rule is simple: observe and record, and only make changes that are needed for safety.

## Step two: secure the keys

Before anything else, make sure the business, not an individual or a former supplier, controls administrative access to its main systems. That means knowing:

- who holds administrator rights for email, the domain name, the website, the accounting system and any cloud platform;
- whether those accounts belong to current staff or to people and suppliers who have moved on;
- which accounts are registered to personal email addresses rather than company ones;
- where billing for each service goes, so that a lapsed card does not quietly switch something off.

Accounts that belong to former staff or suppliers are both a security risk and a continuity risk. The pattern is described in [why former employees still have access](/patterns/why-do-former-employees-still-have-access/). Regaining control here is the one change that should not wait.

## Step three: map what is running

Next, build a plain list of what exists. For each system, record what it is, what it is used for, who uses it, who looks after it and what it connects to. The UK National Cyber Security Centre's [asset management guidance](https://www.ncsc.gov.uk/collection/10-steps/asset-management) recommends recording who is responsible for each asset and what it is used for. In an inherited stack, many rows will start with "unknown" in those columns, and that is useful information in itself.

Gather information from several directions: finance records for paid services, admin consoles for connected apps, devices and servers for installed software, and conversations with each team. People will mention tools they set up themselves. The NCSC's guidance on [shadow IT](https://www.ncsc.gov.uk/guidance/shadow-it) advises a positive, no-blame approach, because if people are blamed for unofficial tools, others become reluctant to mention theirs. In a stack recovery, every disclosed tool is a risk found early.

## Step four: find what actually matters

Not every system deserves the same attention. Trace the handful of processes the business cannot run without, such as taking orders, invoicing, paying staff and serving customers, and note every system and connection each one touches.

The NCSC [Board Toolkit](https://www.ncsc.gov.uk/collection/board-toolkit/principle-a-risk-management/identifying-the-critical-assets-in-your-organisation) points out that knowing which systems are connected, who has access and who manages which component is critical to defending them. It also stresses that this cannot be done by the technical team alone. Business staff know which processes matter; technical staff know what supports them. The work needs both.

The result is usually a short list of critical systems and a longer list of everything else. The critical list gets proper documentation first. The pattern of not knowing these dependencies is covered in [when nobody knows which services depend on which systems](/patterns/when-nobody-knows-which-services-depend-on-which-systems/).

## Step five: check support and age

An old, poorly understood stack often includes software that is past its supported life. For each critical system, check whether the vendor still supports the version in use and whether security updates are still issued.

Vendor lifecycle policies explain what this means in practice. Microsoft's [Fixed Lifecycle Policy](https://learn.microsoft.com/en-us/lifecycle/policies/fixed), for example, sets out that products receive a minimum of five years of mainstream support, that some products then have an extended support phase with security updates, and that beyond end of support security updates are available only through a separate paid programme. The NCSC notes that knowing when systems will no longer be supported helps you plan upgrades and replacements and avoid running vulnerable legacy systems.

Unsupported software on a critical path moves to the top of the list. Unsupported software on a minor tool may simply be a candidate for removal.

## Step six: write down what you learn as you go

Documentation in a recovery is not a separate project. Each time someone works out how something works, they write a short note: what it does, how it connects, how to restart it, who to call. A shared folder of short, dated notes is far more valuable than a perfect manual that never gets finished. [How to design workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/) explains why this matters beyond the immediate recovery.

## Step seven: simplify carefully

Only now does it make sense to remove, consolidate or replace. With a map, a criticality rating and support status for each system, decisions become far safer. The NCSC advises decommissioning systems and information that are no longer used, and making sure data is removed and associated accounts and credentials are disabled as part of the process.

A cautious order works well:

1. Disable, do not delete. Turn off the suspected-unused item and wait through a full business cycle, including month-end.
2. Watch for anything that breaks or anyone who asks.
3. Only then cancel, export what must be kept and delete.

The broader framework for these decisions is in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/).

## An illustrative example

Consider an illustrative Pretoria distribution business with 50 staff, bought by a new owner from its founder. The founder had relied on a long-standing IT contractor and a part-time developer, neither of whom stayed on. The new owner found an on-site server, around 20 cloud subscriptions and a set of scheduled data transfers between the warehouse system and the accounting package.

The first month went on securing access: the domain registration and two cloud admin accounts were still in the founder's personal name. The second month went on mapping. The team traced order-to-invoice and found that a nightly file transfer on the old server fed the accounting package; the server's operating system was past its end of support. That transfer was rebuilt on a supported platform before anything else was touched. Over the following quarter, five subscriptions with no users were disabled, watched through a month-end and then cancelled.

## Understanding is the first deliverable

A stack nobody understands is a risk, but it is also a working system that the business relies on. The aim is not to tear it down. It is to make it understood, owned and supportable, and then to improve it from a position of knowledge. Done in this order, the work rarely causes the outages that people fear, and it creates a foundation for every later improvement.
