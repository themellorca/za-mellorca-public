---
hub: insights
record_id: INS-015
slug: how-to-identify-the-systems-your-business-actually-depends-on
title: How to identify the systems your business actually depends on
description: The systems you depend on are not the software you pay for. A five-step method that starts from activities that cannot stop and ranks systems by impact.
lead: The systems a business depends on are not the same as the software it pays for. A five-step method that starts from the activities that cannot stop, uncovers hidden dependencies such as domains, logins, spreadsheets and connectivity, and ranks them by consequence.
category: Digital Infrastructure
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Digital Infrastructure
sources:
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
  - Identifying the critical assets in your organisation | https://www.ncsc.gov.uk/collection/board-toolkit/principle-a-risk-management/identifying-the-critical-assets-in-your-organisation
  - NIST Special Publication 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - NIST | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
related:
  - How to decide what should be the system of record | /insights/how-to-decide-what-should-be-the-system-of-record/
  - The hidden cost of apps that do not share data | /insights/the-hidden-cost-of-apps-that-do-not-share-data/
  - What to document before connecting two business platforms | /insights/what-to-document-before-connecting-two-business-platforms/
summary: The systems a business depends on are not the same as the software it pays for. A five-step method that starts from the activities that cannot stop, uncovers hidden dependencies such as domains, logins, spreadsheets and connectivity, and ranks them by consequence.
layout: plain
---
Ask most business owners which systems their business depends on and you will get a list of the obvious ones: the accounting package, the CRM, perhaps an ERP or a job management tool. Ask what would stop the business from invoicing tomorrow morning and the answer is often different. The domain name renewal on a director's personal card. The internet line at the main office. The spreadsheet that holds pricing. The one email account that receives every supplier invoice. The bank's approval app on the financial manager's phone.

The systems a business actually depends on are not the same as the software it pays for. Finding the real list takes a different starting point.

## Start from the work, not from the software

A software list is a useful input, but it answers the wrong question. It tells you what you have, not what matters, and it usually misses the things nobody thinks of as a "system". The better starting point is the business itself: what does the business have to keep doing to earn money, serve customers and meet its obligations?

The UK National Cyber Security Centre makes the same recommendation in its [asset management guidance](https://www.ncsc.gov.uk/collection/10-steps/asset-management): understand your critical services and functions, then identify the data and technology they depend on so you can prioritise. Its [guidance for boards on identifying critical assets](https://www.ncsc.gov.uk/collection/board-toolkit/principle-a-risk-management/identifying-the-critical-assets-in-your-organisation) adds that each critical asset should be traceable to a clearly stated business objective, and that understanding dependencies requires business and technology people working together, not IT alone.

## A five-step method

### 1. List the activities that cannot stop

Keep it short. For most small and mid-sized businesses this is somewhere between five and ten activities, such as taking orders, delivering the service, invoicing, collecting payment, paying staff, paying suppliers and meeting statutory deadlines. If you list thirty, you have not prioritised.

### 2. Decide how long each can stop

For each activity, agree how long it could be interrupted before the damage becomes serious. Some can wait a week. Others, such as taking orders on a busy trading day, may tolerate only an hour or two. The US government's preparedness guidance on [business impact analysis](https://www.ready.gov/business-impact-analysis) describes this as predicting the consequences of a disruption, including lost or delayed revenue, higher costs, regulatory penalties and lost customers, and stresses that both timing and duration change the impact. A payroll system outage the week before payday is a very different event from one the week after.

### 3. Walk each activity end to end

Take one activity and follow it from trigger to finish, asking at each step: what does the person use to do this? Include everything, not just named applications:

- software and cloud services, including free tools and personal accounts;
- spreadsheets, shared folders and templates;
- email accounts and phone numbers that customers or suppliers use;
- devices, such as a particular laptop, printer, scanner or card machine;
- connectivity and power at the locations where the work happens;
- logins, authentication apps and the people who hold them;
- integrations and automations that move information between systems;
- suppliers and service providers who run something for you.

This is where hidden dependencies appear. They are rarely exotic. They are usually ordinary things nobody has written down.

### 4. Record the dependency, not just the system

For each item, note what depends on it, who is responsible for it and what happens if it is unavailable. The NCSC guidance recommends recording who is responsible for each asset and what it is used for, and including the suppliers who hold assets on your behalf. Components you do not control can still be listed, as long as it is clear how they affect the ones you do.

### 5. Rank by consequence

Combine the activity's tolerance for interruption with the number of activities each system supports. A system that sits under several critical activities, or under one with very low tolerance, goes to the top. Many businesses discover that their most critical dependencies are not their most expensive software but shared foundations such as email, identity, connectivity and one or two key spreadsheets. NIST's [contingency planning guide](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final) is written for federal information systems, but its stated purpose is the same exercise at larger scale: helping people assess systems so that contingency planning requirements and priorities can be set.

## An illustrative example

Consider a hypothetical East London logistics company with around 60 staff and a fleet of delivery vehicles. Its software list contained eleven paid applications. When managers walked through four critical activities, taking bookings, dispatching drivers, invoicing and paying drivers, they found twenty-six dependencies.

Among them were a dispatch spreadsheet maintained by one controller, a WhatsApp group used to send job details to drivers, a tracking platform whose login was shared by the whole office, and the internet connection at the depot, which had no backup. The accounting system, which everyone had assumed was the most critical system, could in fact be down for two days with little consequence. The dispatch spreadsheet and the depot connection could not be down for more than an hour.

The business did not need to replace anything immediately. It needed to give the spreadsheet a second competent user and a backed-up location, set up a secondary connection at the depot, and replace the shared tracking login with named accounts. These were small changes, but they addressed the dependencies that could actually stop the business.

## Dependencies that are easy to miss

- **Domain names and DNS.** If the domain lapses, email and the website stop together.
- **Identity.** The account that controls administrator access to your cloud services, and the phone that receives its verification codes.
- **Personal accounts.** Business tools signed up for with a staff member's personal email or card.
- **Integrations.** Connections that quietly move orders, payments or customer records between systems. When they fail, both systems look fine.
- **People as systems.** Steps that only one person knows how to perform. These are dependencies too.

The last two are particularly common. The pattern of [nobody knowing which services depend on which systems](/patterns/when-nobody-knows-which-services-depend-on-which-systems/) often surfaces only during an outage, and the inability to produce even a basic list is described in [why businesses cannot list all the applications they use](/discovery/why-businesses-cannot-list-all-applications-they-use/).

## Keep the map alive

A dependency map is only useful if it stays current. Review it whenever you add or remove a system, change a supplier, open a new site or change who does a critical task. A light quarterly check of the top-ranked items is enough for most small businesses. The NCSC suggests that boards seek assurance through periodic sample checks that the inventory is accurate, which scales down easily: pick three items and confirm the owner, location and fallback are still right.

The map also becomes useful well beyond resilience. It tells you which systems need a named owner, which integrations need monitoring and which renewals must never lapse. It gives you a sound basis for deciding [which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) and for putting a value on downtime, a figure many businesses have never worked out, as [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/) explains.

## The trade-offs

It is possible to over-engineer this exercise into a full asset register that nobody maintains. Resist that. The goal is a short, accurate list of the things that would genuinely stop the business, who owns each one and what happens if it fails. A two-page map that is current is worth far more than a fifty-page inventory that was accurate once.
