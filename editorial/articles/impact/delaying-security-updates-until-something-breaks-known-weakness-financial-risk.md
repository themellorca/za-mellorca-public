---
hub: impact
record_id: CPS-133
slug: delaying-security-updates-until-something-breaks-known-weakness-financial-risk
title: Patching Only After Something Breaks: The Price of Leaving Known Weaknesses Open
description: A business that installs security updates only after a failure carries a hidden liability: known flaws that attackers already understand, and an incident bill far larger than routine upkeep.
lead: A business that installs security updates only after a failure carries a hidden liability: known flaws that attackers already understand, and an incident bill far larger than routine upkeep.
category: Security and Resilience
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Security and Resilience
commercial_domain: Security and Resilience
primary_pain: Not installing security updates until something breaks
primary_cost_mechanism: Contingent incident cost from exploited known flaws: downtime, recovery labour, data-breach notification duties, payment fraud and lost client trust, set against the small recurring cost of routine patching
sources:
  - SP 800-40 Rev. 4, Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology - CSRC | https://csrc.nist.gov/pubs/sp/800/40/r4/final
related:
  - The Cloud Is Not a Backup: Finding Data Protection Gaps Before You Lose Data | /impact/assuming-cloud-applications-back-up-all-business-data-backup-gaps-recovery-cost/
  - Too Many Apps to Learn: The Hidden Training and Productivity Cost of Software Overload | /impact/software-overload-staff-cannot-learn-every-application-training-productivity-cost/
  - The Flow Nobody Can Explain: What Undocumented Automations Cost to Fix and Change | /impact/undocumented-automations-slow-troubleshooting-risky-changes-cost/
summary: A business that installs security updates only after a failure carries a hidden liability: known flaws that attackers already understand, and an incident bill far larger than routine upkeep.
layout: plain
---
## The update that waits for a quiet day

A prompt appears on a finance clerk's screen: updates are ready to install and the computer needs a restart. She clicks "remind me tomorrow", as she has for three weeks, because month-end is close and a restart would cost her ten minutes. Down the passage, the file server has not been patched since it was installed. The router firmware is two years old. The accounting software is on a version the vendor stopped supporting. Nobody has decided this is acceptable. It is simply that nothing has gone wrong yet.

That phrase, "until something breaks", is the problem. When updates are installed only in response to a failure, the business has chosen to learn about its weaknesses from an attacker or an outage rather than from a routine maintenance window. This article describes the financial risk of that habit, why it persists and how a small business can break out of it without a dedicated security team.

It overlaps with, but is distinct from, the question of exceptions that are granted and never revisited, covered in [patch exceptions that never expire](/discovery/patch-exceptions-that-never-expire/). Here the issue is the absence of a routine in the first place.

## Why known weaknesses matter

Most security updates exist because someone has found a flaw and the vendor has published a fix. The moment a fix is released, the flaw becomes public knowledge, and attackers can study the patch to learn how to exploit machines that have not applied it. The window between publication and installation is the period of greatest exposure.

The US Cybersecurity and Infrastructure Security Agency maintains a [catalogue of known exploited vulnerabilities](https://www.cisa.gov/known-exploited-vulnerabilities-catalog), a list of weaknesses that have been seen in real attacks, with the aim of helping organisations prioritise remediation. The existence of such a list makes a simple point: many successful attacks use flaws for which a fix already exists. The NIST guide to [enterprise patch management planning](https://csrc.nist.gov/pubs/sp/800/40/r4/final) treats patching as a core maintenance activity that should be planned, not improvised, and frames it around managing the risk of delayed patches against the risk of deploying them. CISA's explanation of [patches and software updates](https://www.cisa.gov/news-events/news/understanding-patches-and-software-updates) makes the same point for non-specialists: updates fix flaws and keeping systems current is among the simplest protective measures.

## Why businesses wait

The reasons are reasonable one by one, which is why the habit lasts.

- **Fear that the update will break something.** An earlier update once broke a printer or an accounting plug-in, and the memory lingers.
- **No maintenance window.** Staff work long hours, and there is never a convenient time to restart a server.
- **Load-shedding.** Power interruptions disrupt scheduled updates, and a machine that shut down halfway through leaves staff wary.
- **Nobody is responsible.** The "IT person" is an employee with another job, or an outsourced provider with a narrow support contract.
- **Old software.** Some systems can no longer be updated because the vendor has withdrawn support, and the business is stuck with them.
- **Invisible reward.** A patch that prevents an incident produces nothing to see. Only the failure is noticed.

## Where the risk accumulates

- staff computers with updates pending for weeks;
- servers and network equipment with no recorded patch history;
- routers, firewalls and Wi-Fi access points on their original firmware;
- browsers and plug-ins used for banking and payroll portals;
- point-of-sale machines, kiosk systems and old PCs controlling equipment;
- unmanaged devices such as laptops used from home and personal phones with company email;
- software that is no longer supported and appears in no inventory, as discussed in [why legacy applications remain live without an owner](/discovery/why-legacy-applications-remain-live-without-an-owner/).

## How the risk becomes a cost

An unpatched weakness is a contingent liability. Nothing is paid until the day it is exploited, and then several costs arrive together.

1. **Downtime.** Ransomware or a compromised server can stop trading for days. For businesses that cannot invoice, ship or take orders, the loss is daily.
2. **Recovery effort.** Rebuilding machines, restoring data, resetting credentials and checking what was touched take specialist hours, often at emergency rates.
3. **Data exposure.** If personal information is accessed, the Protection of Personal Information Act obliges a responsible party to notify the Information Regulator and affected people when there are reasonable grounds to believe data has been accessed or acquired without authority. The Act is available from the [government's documents portal](https://www.gov.za/documents/protection-personal-information-act). Notification, investigation and customer communication all carry cost, and so can regulatory consequences.
4. **Payment fraud.** A compromised mailbox or workstation can be used to redirect supplier payments, with losses that are rarely recovered in full.
5. **Lost customer trust.** Corporate clients increasingly ask about security practices in tenders and renewals, and an incident can end a relationship.

The interaction with insurance also matters. Cyber insurers typically ask about basic controls, including how quickly updates are applied. A business that cannot show a routine may face higher premiums, exclusions or a declined claim. Check the wording of your own policy rather than assuming cover.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical Cape Town business with 30 staff. They are not statistics and do not predict how likely an incident is.

| Assumption | Value |
| --- | --- |
| Annual cost of a routine patching process (tools, a few hours a month) | R36,000 |
| Cost of one serious incident that exploited an unpatched flaw | see lines below |
| Days of lost or limited trading | 4 |
| Gross margin lost per trading day | R22,000 |
| Specialist recovery and rebuild | R85,000 |
| Staff time lost across the business | 30 staff × 12 hours × R180 = R64,800 |
| Legal, notification and customer communication | R40,000 |

- Lost margin: 4 × R22,000 = R88,000
- Recovery: R85,000
- Staff time: R64,800
- Legal and communication: R40,000
- **Illustrative cost of one incident: about R278,000**

Against that, R36,000 a year for a patching routine is roughly an eighth of one incident. The figures are assumptions; the shape of the comparison is the point. A modest, predictable cost can be set against a large, uncertain one. It does not need an exact probability to justify disciplined maintenance, only the recognition that the exposure is real and avoidable.

## What better looks like

The aim is not to apply every update instantly. It is to replace chance with a routine.

1. **Know what you have.** List computers, servers, network devices and key applications, with owners. The method in [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/) is a good start.
2. **Turn on automatic updates where safe.** For workstations, browsers and cloud services, automatic updates are usually the right default. CISA's [guidance on updating software](https://www.cisa.gov/secure-our-world/update-software) recommends enabling them wherever possible.
3. **Set a patch window.** Agree a regular time, such as the first Tuesday evening of the month, for servers and equipment, with a named person and a rollback plan.
4. **Prioritise by exposure.** Internet-facing systems and flaws known to be exploited come first.
5. **Test on a small group.** Apply updates to a few machines before the rest, to catch problems early without delaying everyone.
6. **Protect against power interruptions.** A UPS on servers and network equipment allows installations to complete safely during load-shedding.
7. **Retire what cannot be patched.** If a system is unsupported, isolate it, replace it or record a dated exception with an owner.
8. **Keep evidence.** A simple monthly record of what was patched and what was deferred supports insurers, clients and your own confidence. Also see [why security problems often begin with operational convenience](/patterns/why-security-problems-often-begin-with-operational-convenience/).

## When it becomes urgent

- a vendor announces a serious flaw in software you use;
- a client questionnaire asks how quickly you patch;
- a cyber insurance application or renewal arrives;
- a colleague's account or a supplier's email is compromised;
- an important system reaches the end of vendor support.

## Bottom line

Waiting for something to break before installing security updates treats a known, avoidable risk as an unexpected event. The cost of prevention is small, regular and predictable. The cost of an exploited weakness is large, sudden and shared across downtime, recovery, legal duties and trust. A simple inventory, automatic updates where safe, a monthly patch window and a record of what was done turns an invisible liability into an ordinary maintenance task.
