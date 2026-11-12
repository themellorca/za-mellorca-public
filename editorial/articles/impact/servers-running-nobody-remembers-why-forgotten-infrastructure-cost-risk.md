---
hub: impact
record_id: CPS-233
slug: servers-running-nobody-remembers-why-forgotten-infrastructure-cost-risk
title: The Server Nobody Can Explain: What Forgotten Infrastructure Costs Every Year
description: Servers that outlived their purpose keep drawing power, licences and cloud charges, and become unpatched risks that nobody dares switch off because nobody knows what depends on them.
lead: Servers that outlived their purpose keep drawing power, licences and cloud charges, and become unpatched risks that nobody dares switch off because nobody knows what depends on them.
category: Digital Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Servers kept running because nobody remembers why they exist
primary_cost_mechanism: Power, licence and cloud running costs, unpatched security exposure, investigation time and decision paralysis over retirement
sources:
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
  - Obsolete products | https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products
  - Optimize virtual machine (VM) or virtual machine scale set (VMSS) spend by resizing or shutting down underutilized instances - Azure Advisor | https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations
related:
  - The Server Nobody Dares Replace: What an Ageing Machine Really Risks | /impact/ageing-server-no-replacement-date-failure-and-end-of-support-cost/
  - Cloud Prices for Old Infrastructure: The Cost of Moving Without Redesign | /impact/cloud-migration-without-redesign-old-infrastructure-patterns-cost/
  - Nobody Will Cancel It: What Subscription Inertia Costs a Business | /impact/subscription-inertia-nobody-owns-decision-to-cancel-software-financial-cost/
summary: Servers that outlived their purpose keep drawing power, licences and cloud charges, and become unpatched risks that nobody dares switch off because nobody knows what depends on them.
layout: plain
---
## The server in the corner with no label

During a routine review, an IT supplier lists everything running in a Durban manufacturer's server room and cloud account. Most items have an obvious purpose. Four do not. One virtual server is named after a person who left in 2021. One physical machine hums under a desk and nobody can say what it serves. Two cloud machines were created for a project that ended. Everyone agrees that switching them off might break something, so they stay on.

That agreement is the pain. Forgotten infrastructure is not just waste. It is a cost, a risk and a source of fear all at once, and it persists because uncertainty makes removal feel more dangerous than neglect.

## How servers become orphans

Servers are rarely forgotten on purpose. They are created for a reason that was real at the time and then outlive it.

- **Projects end, systems do not.** A test environment, a data migration or a pilot is built, and nobody is assigned to close it down.
- **People leave.** The one person who knew why a machine existed moves on, and the knowledge goes with them.
- **Replacements run in parallel.** A new system is launched, the old one is kept "just in case" and the case never ends.
- **Quiet dependencies develop.** A scheduled report, a file share or a printer driver quietly relies on the old machine, so nobody dares touch it.
- **Cloud makes it easy.** A virtual machine takes minutes to create and nothing reminds anyone that it still exists. The same pattern appears in [unused cloud resources](/impact/unused-cloud-resources-financial-waste/) and [idle test and development systems](/impact/idle-test-development-systems-cloud-cost/).

## Why forgotten servers are more than a wasted bill

The running cost is the most visible part, but not the largest. A machine that nobody owns is a machine nobody patches, monitors or backs up.

The UK National Cyber Security Centre's [asset management guidance](https://www.ncsc.gov.uk/collection/10-steps/asset-management) starts from the principle that an organisation needs to know what assets it has, what they are used for and who is responsible for them, because it cannot protect what it does not know about. Its advice on [obsolete products](https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products) adds that systems which no longer receive security updates become a growing risk the longer they stay in use. An unlabelled server is the clearest example of both points at once.

- Unpatched software gives an attacker an easy way in, and a neglected machine is a quiet place to stay.
- Data held on it may include customer or employee personal information, which keeps POPIA obligations in force even when nobody remembers the machine.
- Failure of the hardware is more likely with age, and the damage is greater when no one knows what depended on it.

## How the pain becomes money

- **Running cost:** electricity, cooling, rack space, licences and maintenance contracts, or hourly charges in the cloud. In a country where load-shedding makes every watt of backup power expensive, an idle machine on an inverter or generator is not free.
- **Licence and renewal cost:** operating system and database licences continue to be paid for a service that nobody uses. See [unused software licences](/impact/unused-software-licences-financial-waste/).
- **Security exposure:** the cost of an incident that starts on a machine nobody was watching.
- **Management time:** every audit, upgrade and migration has to stop and ask what the unknown machines do.
- **Decision paralysis:** the cost of not being able to retire hardware, move to the cloud or consolidate because the dependencies are unclear.

Cloud providers publish recommendations for finding such waste. Microsoft's [Azure Advisor cost recommendations](https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations) include identifying underused or idle virtual machines and resources, which shows that spotting them is a recognised and measurable task rather than guesswork.

## An illustrative cost model

The figures below are **illustrative assumptions** for a hypothetical mid-sized business with a small server room and a modest cloud account. They are not measurements from any real business.

| Assumption | Value |
| --- | --- |
| Unexplained physical servers | 3, each costing about R900 a month in power, cooling, licences and support share |
| Unexplained cloud machines | 5, each costing about R1,100 a month |
| Hours a year spent by IT working around or investigating them | 40 at R450 per hour |
| Chance of a security incident traced to one of them in a year | 1 in 20 (assumed) |
| Cost of such an incident | R350,000 |

- Physical servers: 3 × R900 × 12 = R32,400
- Cloud machines: 5 × R1,100 × 12 = R66,000
- Investigation time: 40 × R450 = R18,000
- Expected incident cost: 0.05 × R350,000 = R17,500
- **Illustrative total: about R133,900 a year**

The point is not the precision of any line. It is that a handful of machines nobody can explain can quietly cost more than a staff member's monthly salary every year, and that the sum goes on until someone makes a decision.

## Why the pain is tolerated

Removing a server carries blame if something breaks. Leaving it running carries none. The cost of leaving it is spread across electricity bills, licence renewals and cloud invoices where it is easy to miss. Nobody is rewarded for retiring things. IT teams are busy with live problems and treat the unknown machine as a task for later.

## When it becomes commercially urgent

- a hardware failure takes down a machine and a mystery process stops with it;
- a cloud bill rises and nobody can explain a line item;
- an auditor, insurer or customer asks for a list of systems that hold personal data;
- the business plans a move to the cloud or a new office and needs to know what to take;
- a vulnerability alert names software that is running on a machine nobody owns.

## What better looks like

1. **Build the list.** Record every physical, virtual and cloud server with its name, location and creation date. The approach in [how to build a business application inventory that is actually useful](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/) applies to infrastructure as well.
2. **Find an owner for each line.** If nobody claims it, record it as unowned and treat that as a finding, not a conclusion.
3. **Observe before you act.** Check network connections, logins and file activity for a few weeks to see whether anything still uses the machine.
4. **Switch off before you delete.** Power down or isolate the machine for a defined period, with a clear rollback, and watch for complaints.
5. **Back up, then retire.** Keep a verified copy of any data for the period required, then remove the machine, licences and contracts.
6. **Prevent a repeat.** Give every new server an owner, a purpose and an end date at the moment it is created. The reasoning in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/) carries over to hardware.

## Practical next actions

1. Ask your IT provider for a full list of servers and virtual machines, including cloud, and mark every item nobody can explain.
2. Check the last three cloud invoices for compute charges that match no known project.
3. Choose one unexplained machine and run the observe, isolate, back up and retire sequence on it.
4. Add an owner and review date field to every record in the asset list.
5. Calculate what the unexplained machines cost per year and report the figure to whoever approves the IT budget.

## Bottom line

A server that nobody can explain is paying rent for a purpose that may no longer exist, and it carries risk that nobody is watching. Fear of breaking something keeps it running, but the safe route out is a methodical one: list, observe, isolate, back up and retire. The saving is real, and the greater benefit is a business that knows what it runs.
