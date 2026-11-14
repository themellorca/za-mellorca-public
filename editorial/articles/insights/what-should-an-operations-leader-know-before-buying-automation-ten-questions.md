---
hub: insights
record_id: INS-479
slug: what-should-an-operations-leader-know-before-buying-automation-ten-questions
title: What Should an Operations Leader Know Before Buying Automation?
description: Automation vendors demonstrate the easy path. Operations leaders inherit the exceptions, the licence growth and the maintenance. Here are the questions to answer before signing.
lead: Automation vendors demonstrate the easy path. Operations leaders inherit the exceptions, the licence growth and the maintenance. Here are the questions to answer before signing.
category: Software Selection
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Software Selection
sources:
  - The Technology Code of Practice | https://www.gov.uk/guidance/the-technology-code-of-practice
  - Define your purchasing strategy | https://www.gov.uk/guidance/define-your-purchasing-strategy
  - Limits of automated, scheduled, and instant flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/limits-and-config
  - Protection of Personal Information Act 4 of 2013 - South African Government | https://www.gov.za/documents/protection-personal-information-act
related:
  - Why Cheap Software Can Create Expensive Work | /insights/why-cheap-software-can-create-expensive-work-for-your-team/
  - Before you buy another tool, ask these questions | /insights/before-you-buy-another-tool-ask-these-questions/
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
summary: Automation vendors demonstrate the easy path. Operations leaders inherit the exceptions, the licence growth and the maintenance. Here are the questions to answer before signing.
layout: plain
---
The demonstration goes well. A vendor shows an operations director at a Cape Town freight business how incoming booking emails can be read, turned into jobs and routed to the right team without anyone touching them. The price looks modest. Everyone in the room can picture the hours saved. Eighteen months later the director is managing a portfolio of automations nobody fully understands, a licence bill that has doubled and a team that still handles a third of bookings by hand because they did not fit the rules.

Automation can be a very good investment. But the operations leader is the person who lives with it after the sales cycle ends, so the operations leader should ask the questions the demonstration does not answer. Here are ten.

## 1. What problem, in what process, measured how?

Start with the process and the outcome, not the product. Which workflow, which steps, how many cases a month, how long each takes now, how often errors occur and what they cost. If you cannot put numbers on the current state, you will not be able to tell whether the automation worked. Our guide to [calculating the business case for automation](/insights/how-to-calculate-the-business-case-for-automation/) sets out a simple method, and [what business automation should actually solve](/insights/what-business-automation-should-actually-solve/) helps frame the problem.

## 2. Is the process ready to be automated?

Automating a messy process produces a faster mess. Before buying, check whether the steps are stable and agreed, whether the inputs are consistent and whether there are steps that should simply be removed. If the team cannot describe the process the same way twice, design it first.

## 3. What share of cases will the automation actually handle?

Vendors demonstrate the straightforward cases. Ask for the share of your real cases the tool will handle without human help, and test it on a sample of your own data, including the awkward ones. A tool that handles 60% of cases may still be worth having, but the business case must include the people who handle the other 40%.

## 4. What happens to the exceptions?

Every automation needs a route for cases it cannot handle: where they go, who sees them, how quickly and with what information. Ask to see the exception handling, not just the happy path. If exceptions disappear into a log nobody reads, the cost will show up as customer complaints.

## 5. How does it connect to the systems we already run?

The UK government's [Technology Code of Practice](https://www.gov.uk/guidance/the-technology-code-of-practice) is written for the public sector, but several of its points translate directly to a business buying automation: define user needs, make privacy integral, integrate and adapt technology so it works with existing systems, make better use of data and define your purchasing strategy. Ask which of your systems the tool connects to through supported connectors, which need custom work and who maintains those connections when either side changes.

## 6. What will it cost at three times today's volume?

Automation pricing often scales with usage: runs, actions, requests, documents or users. Model the cost at your expected growth and at peak months, not just today's average. Check the platform's limits too. Microsoft's documentation on [limits for Power Automate flows](https://learn.microsoft.com/en-us/power-automate/limits-and-config), for example, explains that request limits depend on the licence and that flows consistently above their limits are slowed and can eventually be turned off. Whatever platform you consider, find the equivalent page and read it before you sign.

## 7. Can we leave?

The UK government's guidance on [defining your purchasing strategy](https://www.gov.uk/guidance/define-your-purchasing-strategy) warns about lock-in, recommends avoiding automatic contract extensions, suggests break clauses and advises being explicit about ownership of data so you can exit cleanly. For automation, also ask whether you can export the logic you build, not only the data. Rules configured in a proprietary designer can be expensive to recreate elsewhere.

## 8. Who will own and maintain it?

Every automation needs an owner who understands what it does, watches whether it runs and approves changes. If the vendor or a consultant builds it, decide who in your business takes over and what they need to learn. Automations break when the systems around them change: a new field in the CRM, a changed email template from a supplier, an expired password. Our article on [who watches the automations](/insights/who-watches-the-automations/) covers this ongoing responsibility, and [how to avoid creating a fragile automation stack](/insights/how-to-avoid-creating-a-fragile-automation-stack/) explains how small automations accumulate into a brittle web.

## 9. How will we know it is working?

Ask what monitoring is included. At a minimum you need to know whether each run succeeded, how many cases went to exceptions and how long work takes end to end. Agree the measures you will use to judge success at three and six months, using the baseline from the first question.

## 10. What data does it touch, and where does it go?

Automations often move personal information between systems and sometimes to the vendor's own infrastructure. Under South Africa's [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act), your business remains responsible for how that information is processed and secured. Ask where data is stored and processed, who at the vendor can access it, how long it is retained and how it is deleted when you leave.

## Running the evaluation

Turn these questions into a short evaluation that every automation purchase goes through, regardless of size. Insist on a pilot using your own data and your own staff rather than a vendor demonstration. Involve the people who do the work today; they know the exceptions. Ask for references from businesses of a similar size, ideally in South Africa, and ask those references what happened after the first year rather than how the implementation went.

Above all, be prepared to walk away or to start smaller. Our piece on [what makes an automation worth building](/insights/what-makes-an-automation-worth-building/) is a useful filter. Often the best first purchase is the smallest one that removes a real, measured pain, with a clear owner and an exit route.

## Practical next actions

1. Write down the process, volumes, handling time and error rate the automation is meant to improve before speaking to vendors.
2. Ask each vendor to run a pilot on a sample of your real cases, including difficult ones, and report the share handled without help.
3. Review the exception handling and monitoring in the pilot, not just the successful path.
4. Model licence and usage costs at three times current volume and at your busiest month, and read the platform's published limits.
5. Check contract length, renewal terms, data ownership and whether your automation logic can be exported.
6. Name the internal owner before signing, and confirm where personal information will be processed and how it will be deleted when you leave.
