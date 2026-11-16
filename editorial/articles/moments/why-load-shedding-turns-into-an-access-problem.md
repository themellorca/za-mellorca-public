---
hub: moments
record_id: STORY-ANGLE-000178
slug: why-load-shedding-turns-into-an-access-problem
title: Why Load-Shedding Turns Into an Access Problem
description: A power cut is shared by everyone in the area, but its effects are not. How outages decide who can still reach a business, and how to keep the door open when the lights go off.
lead: A power cut is shared by everyone in the area, but its effects are not. How outages decide who can still reach a business, and how to keep the door open when the lights go off.
category: Inclusion and Access
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Inclusion and Access
thematic_domain: inclusion_and_access
human_situation: When the power goes off, a business's card machine, booking system and phone line fail together, and the customers with no data, no transport alternatives and no flexible hours are the ones who cannot come back later.
human_dividend: Predictability: customers and staff know in advance how the business will work during an outage, and those with the fewest alternatives can still be served.
trade_off: Backup power and offline procedures cost money and practice; cash and paper fallbacks carry security and reconciliation risks; some services cannot run safely without power at all.
epistemic_state: HYPOTHESISED: reasoned from the published load-shedding FAQ and NIST contingency-planning guidance, not from measured customer loss during outages in South Africa; the pharmacy example is illustrative.
sources:
  - https://www.gov.za/sites/default/files/gcis_document/LoadSheddingFAQ.pdf | https://www.gov.za/sites/default/files/gcis_document/LoadSheddingFAQ.pdf
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
related:
  - Why Language Barriers Show Up in Software Choices | /moments/why-language-barriers-show-up-in-the-software-a-business-chooses/
  - The Small Business Priced Out of Its Own Tools | /moments/the-small-business-priced-out-of-the-tools-built-to-help-it/
  - When rural connectivity decides who can work remotely | /moments/when-a-weak-signal-decides-who-gets-flexible-work/
summary: A power cut is shared by everyone in the area, but its effects are not. How outages decide who can still reach a business, and how to keep the door open when the lights go off.
layout: plain
---
When the electricity goes off in a suburb, it goes off for everyone. The bakery, the clinic, the tyre shop and the pharmacy all lose power at the same moment. It is tempting to think of an outage as a shared inconvenience, equal for all. In practice it is far from equal. Some customers simply shrug, open an app on a charged phone and try again in two hours. Others have walked forty minutes to get there, used their last airtime to confirm the appointment, or taken unpaid time off work. For them, an outage is not a delay. It is a closed door.

This piece argues that load-shedding and unplanned outages are, for many small businesses, an access problem as much as an energy problem, and that the difference lies in how a business plans its fallback. It is a hypothesis drawn from public guidance on load-shedding and on contingency planning, not a measurement of how many customers businesses lose during outages.

## Why the effect is uneven

The government-published [load-shedding frequently asked questions](https://www.gov.za/sites/default/files/gcis_document/LoadSheddingFAQ.pdf) explain that load-shedding is a last resort to prevent the national grid from collapsing, that schedules are drawn up and published in advance, and that the schedules were simplified to make being switched off more predictable. The same document also notes that in exceptional circumstances, control centres may shed load outside the published schedules, so customers can be affected at any time.

Predictable outages are easier to plan for, but only if the business uses that predictability. Many do not. The card machine, the online booking page, the queue-number screen, the phone system and the stock lookup often all depend on the same plug and the same router. When that plug goes dead, the business has no service at all, and the people who cannot simply come back later are the ones who lose out.

Three groups tend to carry most of the cost:

- **Customers without alternatives.** People without card access, without mobile data, or relying on public transport and fixed working hours cannot easily return in the next window.
- **Customers with urgent needs.** Someone collecting chronic medication or a repaired work tool cannot wait a day without consequences.
- **Staff in the lowest-paid roles.** Shift workers may be sent home unpaid, or asked to stay late to catch up once power returns, often at short notice.

## An illustrative example

Consider an illustrative example, not a real case: an independent pharmacy in a township shopping strip, with six staff. Its dispensing software, card machine, medical-aid claims and phone line all stop during an outage. A small inverter keeps the lights on but not the computers. Regular patients who collect chronic medication have learned to check the schedule and come at other times, if they can. Those who cannot are told to come back. Some return the next day. Some go without for a day or two. The pharmacist knows several by name and dislikes turning them away, but without the dispensing record she cannot safely check what they are due.

Nothing in this story is a technology failure. The equipment did what equipment does when the power stops. The gap is in the plan: there was no defined way to keep serving the people who needed it most.

## The human tax: access and predictability

The first tax is access. A service that is only available when the grid is up is, for some customers, a service with a lock on the door at unpredictable hours. Our story on [when digital-only leaves some customers behind](/moments/when-digital-only-leaves-some-customers-behind/) describes how moving everything onto one channel narrows who can be served. Outages sharpen the same problem, because every digital channel can fail at once.

The second tax is predictability. Customers who cannot rely on a business being open in a usable state start to plan around it, or stop coming. Staff who cannot rely on their shift pattern lose the ability to plan childcare, transport and second jobs. The neighbouring piece on [why accessibility is also an operational question](/moments/why-accessibility-is-also-an-operational-question/) makes the wider case that access is shaped by operations, not only by design.

## What contingency planning offers

The discipline that addresses this is contingency planning. The US National Institute of Standards and Technology publishes a [contingency planning guide for information systems](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final), written for larger organisations but useful for any business. Its central idea is simple: decide in advance which functions matter most, what they depend on, and how they will continue or be restored when something fails. It treats contingency planning as part of organisational resilience, not an IT afterthought.

For a small business facing load-shedding, that becomes a short list of questions. Which services must continue during an outage, and for whom? What does each depend on: power, internet, a specific computer, a specific person? What is the minimum safe version of the service without those things? And who decides, at the moment the lights go off, which mode the business is in?

The answers are rarely all technical. A printed list of the next day's collections, a paper form for orders taken during an outage, a battery-backed router so the card machine and phone keep working, cloud-hosted records that can be read from a phone, and a clear sign telling customers what can and cannot be done right now. The point is not to keep everything running. It is to keep the essential door open for the people who cannot come back later. If the business depends on one office computer, the story about [remote work that depends on one office machine](/moments/when-remote-work-depends-on-one-office-machine/) shows how that single dependency spreads.

## Practical next actions

1. **List what stops.** Walk through the business with the power off, on paper, and write down every service that stops and why.
2. **Name the customers who cannot wait.** Identify the groups for whom a return visit is costly or unsafe, and decide what minimum service they will receive during an outage.
3. **Back up the narrow path first.** Put battery backup on the router, card machine and one device that can read essential records, before considering larger backup power.
4. **Write an outage mode.** Prepare a one-page procedure covering paper orders, cash handling, how records are updated afterwards, and who is in charge.
5. **Tell people in advance.** Publish what will and will not be available during scheduled outages, in the languages and channels your customers actually use.
6. **Protect shift workers' pay and plans.** Agree a fair rule for shifts affected by outages, so staff are not left guessing whether they will be paid or kept late.

## The business outcome

A business that can keep serving essential customers during an outage holds on to the people most likely to drift away, and avoids the rush and errors that come from a backlog when power returns. Staff work under less pressure because the outage mode is rehearsed rather than improvised. Records stay more accurate because paper transactions are captured by a defined routine instead of from memory. The reassurance of knowing whether data survived is covered in [the stress of not knowing if the backup worked](/moments/the-stress-of-not-knowing-if-the-backup-worked/).

## The human dividend

The dividend is predictability, especially for those with the least room to absorb disruption. A pensioner who knows the pharmacy will still hand over her chronic medication during the afternoon outage does not have to plan her week around the schedule. A cashier who knows the rule about outage shifts can arrange transport home. Access stops depending on luck.

## The trade-offs

- **Backup costs money.** Batteries, inverters and cloud services carry upfront and ongoing costs that a small business must weigh.
- **Fallbacks carry risk.** Cash handling and paper records introduce security and reconciliation work that must be managed carefully.
- **Some services cannot continue.** Where safety depends on equipment or records, refusing service may be the right answer, and the plan should say so.
- **Plans need practice.** An outage procedure that nobody has rehearsed tends to fail on the first real afternoon.

## Why it matters

Outages are not chosen by small businesses, but how a business behaves during them is. A plan that keeps a narrow door open for the people with the fewest alternatives turns a shared inconvenience back into something closer to a shared burden. That is a modest change in operations and a meaningful one for the customers who would otherwise be turned away.
