---
hub: impact
record_id: CPS-066
slug: software-needing-constant-manual-workarounds-hidden-labour-cost-behind-licence-fee
title: The Labour Cost Hidden Behind Software That Needs Constant Workarounds
description: When staff patch the gaps in a business system by hand, the real cost of the software is its licence plus a recurring labour bill that no invoice shows.
lead: When staff patch the gaps in a business system by hand, the real cost of the software is its licence plus a recurring labour bill that no invoice shows.
category: Digital Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Staff rely on constant manual workarounds because business software cannot do what the process needs
primary_cost_mechanism: Recurring labour cost and error rework hidden behind the licence fee
sources:
  - Operational Excellence cloud design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles
  - Explore the Power Automate home page - Power Automate | https://learn.microsoft.com/en-us/power-automate/getting-started
  - Manage your data in Dynamics 365 implementation projects - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/data-management
related:
  - Recreating Documents Nobody Can Find: The Cost of Duplicated Work | /impact/staff-recreating-lost-documents-duplicated-work-cost/
  - Policing Routine Work: The Management Cost of Checking Recurring Tasks by Hand | /impact/checking-recurring-tasks-completed-management-policing-cost/
  - Software Bought Before the Process Was Defined: What Failed Implementations Cost | /impact/technology-bought-before-process-defined-failed-implementation-wasted-licences/
summary: When staff patch the gaps in a business system by hand, the real cost of the software is its licence plus a recurring labour bill that no invoice shows.
layout: plain
---
## The licence is the small number

Ask a business what its main operating system costs and you will hear the subscription: so many rand per user per month. Ask the people who use it what they do around it, and a second cost appears. The export to a spreadsheet every Friday so the report looks right. The second screen with the customer list because the system cannot filter it. The colleague who corrects dates by hand after the import. The email to a supervisor because the approval step does not exist. None of this is on an invoice. It is paid for in salaries, and it recurs every week.

This article is about software that requires constant manual workarounds, and the labour cost that hides behind the licence fee. The aim is not to blame the software or the staff. It is to show how to see the workaround cost, put a number on it, and decide whether to fix it, replace it or live with it deliberately.

## Why workarounds become normal

A workaround starts as a clever fix. Someone finds a way to get the job done despite a limitation, and it works. It is repeated, then shared, then taught to new joiners as "how we do it here". After a few months it has stopped feeling like a workaround at all. It is simply the process.

The staff who perform these steps are usually resourceful and conscientious, which is exactly why the cost stays hidden. They absorb the extra effort without raising it, partly out of professional pride and partly because they assume the limitation is permanent. Managers, meanwhile, see work being completed on time and conclude that the system is adequate. Nobody measures the five minutes here and the twenty minutes there, because each looks too small to matter.

The related Mellorca insight, [why repeated workarounds are a warning sign](/insights/why-repeated-workarounds-are-a-warning-sign/), and the pattern [why teams keep building manual workarounds](/patterns/why-teams-keep-building-manual-workarounds/), describe the organisational side. This piece is about the arithmetic.

## Where the effort goes

- **Re-entering data** from one screen, file or system into another.
- **Spreadsheet shadow systems** that hold what the main system cannot, and must be kept in step with it.
- **Manual checks** on outputs the system should validate itself.
- **Chasing** people for steps the software cannot trigger or track.
- **Corrections** after the fact, when automated or manual processes introduce errors.
- **Training time** spent teaching the unwritten workaround as well as the system.

Vendor and architecture guidance treats exactly this as an anti-pattern. The Azure Well-Architected Framework's section on [automating for efficiency](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/principles) describes workflows in which people do mundane, repetitive, time-consuming tasks that do not need human intellect. It notes that such effort grows as the workload grows, that these processes are error-prone because of human input, and that automation saves time, effort and money while avoiding mistakes. It also advises evaluating workflows by complexity, effort, frequency, accuracy, timeliness and lifespan, and removing redundant ones. That evaluation is the right starting point for a business of any size.

Microsoft's [Power Automate documentation](https://learn.microsoft.com/en-us/power-automate/getting-started) describes the purpose of that tool as helping to optimise business processes and automate repetitive tasks by creating automated workflows between apps and services. It is one example among many, and no product removes the need to understand the process first. But the existence of mainstream tools for exactly this purpose is a reminder that many workarounds are no longer technically necessary.

## How it becomes money

The principal mechanism is labour cost, with error and rework cost as a significant second. The calculation is straightforward and uses figures any business can find:

> Annual workaround cost = occurrences per week × minutes each ÷ 60 × people involved × weeks worked × loaded hourly cost, plus the cost of errors that result

### An illustrative comparison

Take a 25-person wholesale business using an order management platform at R450 per user per month for 15 users. Staff have developed four routine workarounds. Every figure is an **illustrative assumption**.

| Workaround | Assumption | Hours a year |
| --- | --- | --- |
| Exporting orders to a spreadsheet to produce the weekly picking list | 1 person × 1.5 hours × 48 weeks | 72 |
| Retyping customer changes into the accounting package | 2 people × 3 hours a week × 48 weeks | 288 |
| Manually checking discounts against a price list | 1 person × 4 hours a week × 48 weeks | 192 |
| Chasing sign-off by email and phone | 3 people × 1 hour a week × 48 weeks | 144 |
| **Total** |  | **696 hours** |

At an assumed loaded cost of R280 an hour, 696 hours is R194,880 a year. Add a modest allowance for errors: say 20 corrections a year at 1.5 hours each plus R400 of credit-note or courier cost, which is 30 hours (R8,400) plus R8,000, or R16,400. The workaround cost is about R211,000 a year.

Now compare it with the licence: 15 × R450 × 12 = R81,000. In this example **the hidden labour is about 2.6 times the visible licence**. The true annual cost of the platform is about R292,000, nearly R1,600 per user per month rather than R450 per user per month. The model also shows what a fix is worth. A R90,000 project that removes three-quarters of the workaround hours would save around R146,000 a year and pay back in about seven months. Again, these are assumptions to adapt, not benchmarks.

One caution is that freed hours are only a saving if they are redeployed or avoid hiring. Otherwise they are capacity, which is real, but is not cash. Be explicit about which you are claiming.

## Secondary consequences

Workarounds carry risks beyond time. They are rarely documented, so they depend on specific people and leave when those people do. They create inconsistent data, which undermines reports and decisions. They conceal the need for improvement, so the system never gets fixed. And they sometimes bypass controls: the manual check that nobody performs on a busy Friday is the check that would have caught the error. Microsoft's guidance on [data management in implementation projects](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/data-management) gives an example of a retailer whose email campaigns failed because customers could enter any value in a contact field with no validation. A small workaround, fixing the symptom downstream, would have hidden the cause for years.

## When it becomes urgent

Look hard at the workarounds when headcount is rising only to keep up with volume, when a key person who knows the unwritten steps is leaving, when you are about to renew or upgrade the software, or when you plan to automate. Automating a workaround without understanding it simply speeds up a flawed process, a trap covered in [automating a broken process without simplifying it](/impact/automating-broken-process-without-simplifying-cost/).

## What better looks like

A healthy business makes workarounds visible. Staff are encouraged to report them, and a short register records what each one is, how often it happens, how long it takes and which limitation it works around. Each is classed as fix in the software, change the process, automate, or accept. The cost is reviewed against the licence and against alternatives at renewal time. Where the software cannot be configured to do the job, that is evidence for a replacement conversation, not for another year of silent effort. The wider case for automating repeatable tasks is set out in [repeatable manual work and its payroll cost](/impact/repeatable-manual-work-payroll-cost-automation/).

## Practical steps

1. **Ask each team** what they do outside the system every week, and write it down without judgement.
2. **Time the top ten** by frequency. A week of rough records is enough.
3. **Calculate hours and rand** using the formula above, and compare the total with the licence.
4. **Classify each workaround** as configure, redesign, automate, replace or accept.
5. **Fix the cheap ones first**: validation rules, templates, saved filters and standard imports often remove hours for little money.
6. **Put the total on the renewal agenda** so the decision to renew is made with the full cost in view. A [business automation](/services/business-automation/) review can help prioritise.

## Bottom line

The invoice shows what the software costs to own. The workarounds show what it costs to use. When the second figure is larger than the first, the licence is no longer the right way to judge the purchase. Measuring the hidden labour turns a vague frustration into a number, and a number can be compared with the cost of fixing the problem.
