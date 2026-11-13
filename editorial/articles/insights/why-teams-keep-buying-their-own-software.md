---
hub: insights
record_id: INS-033
slug: why-teams-keep-buying-their-own-software
title: Why teams keep buying their own software
description: Teams buying their own software are usually filling a gap the approved systems leave open. How to find what is in use and fix the route that caused it.
lead: When teams buy software on their own cards, they are usually filling a real gap that the approved systems and request process leave open. How to find what is in use, read it as evidence and fix the route that caused it.
category: Systems & Strategy
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Systems & Strategy
sources:
  - Shadow IT guidance | https://www.ncsc.gov.uk/guidance/shadow-it
  - What Is Shadow IT? - IBM | https://www.ibm.com/think/topics/shadow-it
  - Discover and manage Shadow IT - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it
  - Section 21 Security measures regarding information processed by operator - POPIA | https://popia.co.za/section-21-security-measures-regarding-information-processed-by-operator/
related:
  - What keep, fix, integrate, automate, replace or remove means in practice | /insights/what-keep-fix-integrate-automate-replace-or-remove-means-in-practice/
  - How to buy business software without letting the demo make the decision | /insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/
  - Piling on more software is not digital maturity | /insights/piling-on-more-software-is-not-digital-maturity/
summary: When teams buy software on their own cards, they are usually filling a real gap that the approved systems and request process leave open. How to find what is in use, read it as evidence and fix the route that caused it.
layout: plain
---
Most businesses discover their unofficial software by accident. A card statement shows a subscription nobody recognises. A client mentions the portal your sales team sends quotes from. A departing employee hands over a list of logins, and half of the tools on it were never approved, set up or paid for through the normal route.

The usual reaction is to treat this as a discipline problem: people went around the rules, so tighten the rules. That reaction is understandable, and it usually makes things worse. Teams rarely buy their own software because they want to break policy. They buy it because they have a job to do, the approved tools do not do it well enough, and asking for something better takes longer than paying for it themselves.

This article looks at why that happens, what it tells you about the business, and how to respond in a way that keeps the useful part of the behaviour while removing the risk.

## It is usually a signal, not sabotage

The UK National Cyber Security Centre makes the point directly in its [guidance on shadow IT](https://www.ncsc.gov.uk/guidance/shadow-it): unofficial tools are generally not the result of malicious intent. The NCSC lists the familiar triggers, including approved services that lack storage, cannot share files with outside parties, or do not support the way a team communicates, and request processes that are slow or ineffective. Its recommended response is to bring the use above board by addressing the underlying need, rather than simply banning it.

IBM's [explainer on shadow IT](https://www.ibm.com/think/topics/shadow-it) describes the same pattern from the buyer's side. Cheap, self-service cloud software has made it easy for anyone with a company card to start using a tool the same afternoon, and teams often see central procurement as slow or burdensome. IBM also cites research showing that a large share of employees have acquired, modified or created technology without their IT team knowing.

In other words, when a team buys its own software, it is telling you something specific: there is a gap between the work it has to do and the systems it has been given, and the route for closing that gap is not working.

## Five reasons teams go their own way

### 1. The core system does one part of the job badly

A finance package may handle invoicing well but make job costing painful. A CRM may track deals but offer no sensible way to manage proposals. The team does not want a new system; it wants the missing piece. A specialist tool fills the gap quickly, and nobody asks whether the core platform could have been configured to do it.

### 2. Asking takes longer than buying

If a request for a new capability disappears into an inbox for three weeks, a manager with a deadline will pay R300 a month on a card and move on. The cost of waiting is felt immediately; the cost of an unmanaged subscription is felt later and by someone else. See [why procurement requests disappear into email](/discovery/why-procurement-requests-disappear-into-email/) for how that delay usually builds up.

### 3. Nobody owns the shared systems

When the CRM or project tool has no named owner, nobody can say yes to a change, so every improvement request stalls. Buying a separate tool is the only decision the team can make on its own authority.

### 4. The team has a different rhythm from the rest of the business

Field teams, creative teams and client-facing teams often work in ways the central system was not designed for. They need mobile capture, visual boards, or a way to share work with clients. If those needs were never part of the original requirements, the team will find its own answer.

### 5. Trials quietly become permanent

Many tools start as a free trial for one project. People start relying on them, the trial converts to a paid plan, and a year later the tool holds client records and nobody remembers deciding to keep it.

## What it costs when it stays hidden

The subscription fee is the smallest part of the problem. The larger costs show up elsewhere:

- **Data in places you cannot see.** Customer details, quotes or staff information sit in an account set up with someone's personal email address, with no backup arrangement and no way for the business to recover them if that person leaves.
- **Work that has to be retyped.** The new tool does not talk to the core systems, so somebody copies information between them by hand, often every day.
- **Duplicate spend.** Two teams pay for similar tools without knowing about each other, or pay for a capability the business already licenses.
- **Obligations nobody checked.** Under the Protection of Personal Information Act, a business that lets a supplier process personal information on its behalf must have a [written contract requiring that supplier to maintain security measures](https://popia.co.za/section-21-security-measures-regarding-information-processed-by-operator/). A tool bought on a card has usually had no review of where data is stored or what the contract says.

The recurring charges themselves are covered in more detail in [the invisible recurring cost of unknown software subscriptions](/impact/unknown-software-subscriptions-invisible-recurring-cost/).

## How to find out what is already in use

You cannot respond to a pattern you have not seen. For most small and mid-sized businesses, a practical discovery exercise uses three sources:

1. **Money.** Pull twelve months of card and expense transactions and search for software vendors. Recurring monthly amounts in foreign currency are a strong clue.
2. **Sign-ins.** Look at which outside services people log into with their work accounts. Larger organisations can use tooling for this: Microsoft's [tutorial on discovering and managing shadow IT](https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it) describes analysing traffic to see which cloud apps are in use, then reviewing their risk and who uses them.
3. **Conversation.** Ask each team what they use to get their work done, framed as a request for help rather than an audit. People will tell you far more if they do not expect to lose the tool.

The Microsoft guidance makes a useful practical point: when you look at discovered apps by category, you often find unofficial tools being used for legitimate work that no approved tool covers. If everyone using a particular app sits in one department, there is probably a real business need behind it, and you should talk to that team about alternatives before blocking anything.

## Respond to the need, then decide about the tool

Once you have a list, resist the urge to sort it into allowed and banned. Instead, ask four questions about each tool:

| Question | What the answer tells you |
| --- | --- |
| What job is this tool doing that the approved systems do not? | Whether there is a genuine gap in the core platforms |
| Could an existing system do that job with configuration? | Whether the gap is real or an unmet change request |
| What business data does it hold? | How much risk the current arrangement carries |
| Who would own it if it became official? | Whether it can be supported properly |

Some tools will turn out to be the right answer and should be adopted properly, with a business owner, a company account, access control and a place in your application list. Some should be replaced by a configuration change to a system you already pay for. A few should be retired, with the data moved somewhere safe first.

## A worked example

*Illustrative example:* a Durban engineering services firm with around 60 staff found eleven software subscriptions on company cards that were not on any official list. Three were file-sharing tools used by site teams because the approved system was awkward on mobile phones. Two were form builders used to capture site inspections. One was an electronic signature service the sales team used for client approvals.

Rather than cancelling everything, the firm treated the list as a set of requirements. Mobile access to files was solved by configuring the existing document platform properly and training site leads. Inspection forms moved into a single, company-owned tool with a named owner and a link to the job records. The signature service was adopted officially because it did a job nothing else did. The firm also set a five-working-day target for responding to software requests, so the next gap would come to someone's attention before a card was used.

## Fix the route, not just the list

Clearing up today's unofficial tools is worth doing, but it will not last if the reasons people bought them remain. The durable fixes are organisational:

- A short, visible route for requesting a new capability, with a response time people can rely on.
- A named owner for every core system who can approve configuration changes.
- A simple check before any purchase, such as the questions in [before you buy another tool](/insights/before-you-buy-another-tool-ask-these-questions/).
- A regular look at the application list, so you know when the portfolio is growing faster than it should. [How to know when you have too many business apps](/insights/how-to-know-when-you-have-too-many-business-apps/) sets out the warning signs.

The NCSC also stresses culture: people should be able to say which tools they use without fear of blame. If owning up to an unofficial tool leads to a reprimand, the next one will simply stay hidden.

When teams keep buying their own software, the business is getting free information about where its systems fall short. Treated as evidence, those purchases can point directly to the improvements that matter most. Treated only as rule-breaking, they go underground, and the gaps they were filling stay open.
