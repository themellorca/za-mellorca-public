---
hub: insights
record_id: INS-029
slug: before-you-buy-another-tool-ask-these-questions
title: Before you buy another tool, ask these questions
description: Most software purchases are settled before anyone looks at a product. Ten questions to ask so you buy a tool only when buying is the right answer.
lead: Most software purchases are decided before anyone evaluates a product. Ten questions to ask at the moment someone says "we need a tool for this", so the business buys only when buying is the right answer.
category: Technology & Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Technology & Operations
sources:
  - Shadow IT guidance | https://www.ncsc.gov.uk/guidance/shadow-it
  - The Technology Code of Practice | https://www.gov.uk/guidance/the-technology-code-of-practice
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - Why more software can make the business harder to run | /insights/why-more-software-can-make-the-business-harder-to-run/
  - Poor data is an operations problem, not just a data problem | /insights/poor-data-is-an-operations-problem-not-just-a-data-problem/
  - What to ask about APIs before buying business software | /insights/what-to-ask-about-apis-before-buying-business-software/
summary: Most software purchases are decided before anyone evaluates a product. Ten questions to ask at the moment someone says "we need a tool for this", so the business buys only when buying is the right answer.
layout: plain
---
The decision to buy a new business application is usually made long before anyone sits through a demo. It is made in a meeting when someone says "we need a tool for this", and everyone nods. From that point the conversation is about which tool, not whether a tool is the answer.

That moment is where most software sprawl begins. Each purchase is reasonable on its own. Together they leave a business with overlapping applications, customer data in several places, subscriptions nobody can explain and staff acting as the connection between systems that were never designed to work together.

This article is not about evaluating vendors. That is covered in [how to buy business software without letting the demo make the decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/). It is about the questions to ask earlier, before a shortlist exists, to decide whether the business should be shopping at all.

## Why the request arrives as a product

People rarely ask for a capability. They ask for a product they have seen, used elsewhere or been shown by a colleague. That is understandable. A named tool feels concrete, while "we need a better way to track supplier delivery dates" feels vague.

The UK National Cyber Security Centre's guidance on [shadow IT](https://www.ncsc.gov.uk/guidance/shadow-it) describes the same dynamic from a security angle. Staff usually adopt unapproved tools to complete a specific task when the sanctioned tools fall short or the approval process is slow, not out of carelessness. The NCSC recommends understanding the underlying need rather than punishing the workaround. The lesson applies to formal purchases too. A tool request is evidence of an unmet need. The need deserves examination before the tool does.

## Ten questions to ask first

### 1. What problem, stated without naming a product?

Ask the requester to describe the problem in one or two sentences without mentioning any software. "Quotes take three days to go out because pricing has to be checked by the sales manager" is a problem. "We need a CPQ tool" is a solution. If the problem cannot be stated plainly, it is not yet understood well enough to buy for.

### 2. What does it cost today?

Estimate the time, delay, errors or lost revenue the problem causes now. This does not need to be precise. It needs to be large enough to justify not only a licence, but also implementation, training, integration and ongoing administration.

### 3. Is the cause a missing capability, or a process that has not been designed?

Many problems that look like missing software are really unclear ownership, an undefined handoff or an approval nobody has authority to give. A new application will not resolve those. It will move them into a different screen. The point is developed in [the cost of buying software for every process problem](/impact/buying-software-for-every-process-problem/).

### 4. Can something we already pay for do this?

Most businesses use only part of what their existing platforms can do. Accounting, CRM and productivity suites often include modules, forms, workflow or reporting features that nobody has switched on. The GOV.UK [Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice) asks public bodies to share and reuse technology to avoid duplicating effort and cost. The same discipline suits a private business: check the existing estate before adding to it.

### 5. Where will the data live, and who else needs it?

Every new application creates a new place where information is stored. If that information also matters to finance, sales or operations, either the tool must connect to the systems they use, or someone will copy data between them by hand. Ask which existing record the new tool will create, read or change, and which system will be the authority for it.

### 6. How will it connect?

The Technology Code of Practice includes a point on integrating and adapting technology so that new systems work with what already exists. In practice that means asking, before purchase, whether the tool has a documented way to exchange data with your core systems, and who will build and maintain that connection. "It has an API" is the beginning of that conversation, not the end.

### 7. Who will own it?

Ownership means someone who manages users, configuration, renewals, data quality and changes, and who is accountable when it fails. If nobody can be named, the tool will drift. It will keep charging after its champion leaves and will hold data nobody looks after.

### 8. What will it replace?

A good purchase usually retires something: a spreadsheet, a manual step, another subscription. If the answer is "nothing", the business is adding complexity, and the benefit needs to be correspondingly clear. Removing tools is harder than adding them, as described in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/).

### 9. How would we leave?

Ask how data can be exported, in what format, and what happens to records when the subscription ends. The Technology Code of Practice asks that purchasing strategy consider contractual limitations. For a small business, the practical version is to know the notice period, the auto-renewal terms and the exit route before the first invoice.

### 10. Does it touch personal or sensitive information?

If the tool will hold customer, employee or supplier personal information, it brings obligations under the Protection of Personal Information Act, including the requirement in [section 16](https://popia.co.za/section-16-quality-of-information/) to take reasonably practicable steps to keep it complete and accurate. Many trial tools are set up by individuals who never consider this, and the business only discovers the exposure later. The related risk is explored in [why free trials become production dependencies](/discovery/why-free-trials-become-production-dependencies/).

## An illustrative example

Consider a hypothetical Durban engineering services firm with about forty staff. The operations manager asks for a project management application because jobs keep running late and clients complain about not being updated.

Working through the questions changes the picture. The problem, stated plainly, is that site teams do not report progress until a job is finished, so the office cannot warn clients about delays. The firm's existing field service system already has a job status feature, but it was never configured and technicians were never asked to use it. A new project tool would have added a third place where job information lived, alongside the field service system and the accounting package, without solving the reporting gap.

The firm instead configured job status updates in the existing system, made two status changes mandatory before a technician could close a visit, and set up a weekly exception report for overdue jobs. The request for a new tool was a useful signal. The tool itself would not have helped.

This is an illustrative scenario, not a client case study.

## Turning the questions into a habit

The questions are only useful if they are asked consistently. A simple approach works for most small and mid-sized businesses:

- **A one-page request.** Anyone proposing a new tool answers the ten questions in writing before any trial or demo is booked.
- **A named approver.** One person, often in finance or operations, reviews requests against the existing application list.
- **A current application list.** Without knowing what the business already pays for, question four cannot be answered.
- **A quick turnaround.** The NCSC warns that slow approval processes drive people to workarounds. A request process that takes weeks will be bypassed.

The aim is not to slow the business down or make staff justify every small utility. It is to make sure that purchases which create new data, new integrations or new recurring costs are deliberate.

## What better looks like

In a business that handles this well, tool requests are treated as problem reports. Most are resolved by configuring something that already exists, by fixing a process or by clarifying ownership. When a new application is the right answer, it arrives with a defined purpose, an owner, a plan for how it connects and something it replaces.

Where the existing estate is already too tangled to answer these questions confidently, a structured [digital systems audit](/services/digital-systems-audit/) can establish what the business has, what each system is for and where the real gaps are, so the next purchase decision starts from evidence.
