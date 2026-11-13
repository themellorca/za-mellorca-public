---
hub: impact
record_id: CPS-075
slug: software-environment-grew-by-accident-complexity-duplication-lost-productivity-cost
title: Software that grew by accident: The price of complexity nobody designed
description: When systems pile up one quick fix at a time, duplication and confusion follow. See how to estimate the cost and draw the picture that lets you simplify safely.
lead: When systems pile up one quick fix at a time, duplication and confusion follow. See how to estimate the cost and draw the picture that lets you simplify safely.
category: Digital Infrastructure
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Infrastructure
commercial_domain: Digital Infrastructure
primary_pain: The software environment grew by accident with overlapping tools, unclear ownership and no overall design
primary_cost_mechanism: Technology waste and lost productivity from duplication and complexity
sources:
  - Plan - Training | https://learn.microsoft.com/en-us/training/modules/cloud-adoption-framework/3-plan
  - Microsoft 365 Admin Center Usage Reports Overview - Microsoft 365 admin | https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports
  - Monitor usage & security with reports - Reports & monitoring - Google Workspace Help | https://knowledge.workspace.google.com/admin/reports/monitor-usage-and-security-with-reports
related:
  - Business data locked in apps nobody understands: The cost of vendor dependency | /impact/business-data-locked-in-applications-nobody-understands-export-vendor-dependency-risk/
  - The free tool that became expensive: Choosing software on price alone | /impact/free-tools-outgrown-hidden-limits-switching-cost-choosing-by-price/
  - Software bought without approval: The financial and security cost of shadow IT | /impact/software-bought-without-approval-shadow-it-cost/
summary: When systems pile up one quick fix at a time, duplication and confusion follow. See how to estimate the cost and draw the picture that lets you simplify safely.
layout: plain
---
Ask how the company's systems fit together and you will often get a laugh, then a story. The accounting package was chosen by the first bookkeeper. The customer database began as a spreadsheet and was later "temporarily" copied into a cloud tool. A booking system arrived with an acquisition, a messaging platform came during the pandemic, and an automation tool was added by a keen employee who has since left. Nobody planned this environment. It accumulated, one sensible decision at a time, until it became too tangled for any one person to describe.

## The pain: an environment that nobody designed

Almost every business that has operated for more than a few years has some version of this. The issue is not age or size. It is that the technology has grown by accretion, with each addition solving the problem of the day and none considering the whole. Mellorca's insight on [why piling on software is not digital maturity](/insights/piling-on-more-software-is-not-digital-maturity/) makes the same point from the other direction: more tools do not mean a better system.

This article is about the cost of the tangle itself: the duplication, the complexity tax and the lost productivity that follow when no one has ever drawn the picture. It builds on the narrower pieces already published on [software overload and training](/impact/software-overload-staff-cannot-learn-every-application-training-productivity-cost/) and [systems that do not talk to each other](/impact/business-systems-do-not-talk-integration-cost/).

## How a business ends up here

- **Problems arrive one at a time.** Each gets the quickest available fix, not the best fit for the whole.
- **Nothing is ever switched off.** New tools are added, old ones linger because someone still uses them, or because nobody knows what depends on them.
- **Different people buy different things.** Over the years, each manager brings favourite tools.
- **Growth, mergers and staff turnover** add systems and remove the people who understood the earlier ones.
- **The cost is spread out.** No single bill reveals the complexity, so it is never prioritised.

## Symptoms of an accidental environment

- Two or three tools do overlapping jobs, and staff choose by habit.
- Nobody can list all the applications in use, let alone say who owns each.
- Simple changes, such as a new product code or a new payment term, must be made in several places.
- New starters need weeks to learn which tool is used for what.
- Reports require a person who knows where to look and which numbers to trust.
- One system is kept running purely because something else depends on it, and nobody is certain what.
- When an employee leaves, the knowledge of how things connect leaves with them.

## What the complexity costs

1. **Duplicate spending.** Overlapping tools and unused seats. Usage reports, such as [those Microsoft describes for its 365 admin centre](https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/activity-reports), can show who uses a service heavily and who barely uses it, which is often the first evidence of waste.
2. **Productivity loss.** Time spent switching between tools, searching for information and working out which version is correct.
3. **Training and onboarding drag.** The more tools and exceptions, the longer it takes a new person to become effective.
4. **Change cost.** Everything takes longer to alter because nobody is certain what the change will affect.
5. **Risk.** Unmanaged systems may hold outdated data, unpatched software or forgotten user accounts.
6. **Slower growth.** Doubling volume doubles the manual bridging between systems, which sets a ceiling on how much the business can handle.

## A way to estimate the damage

The figures below are assumptions for a hypothetical South African services company with 50 staff, used to show how to build the estimate. They are not benchmarks. The point is the method: count the tools, count the time, and apply a rate.

| Item | Assumption | Annual cost |
| --- | --- | --- |
| Overlapping or unused subscriptions | R6 000 a month across 6 tools | R72 000 |
| Time lost switching and searching | 50 staff, 30 minutes a week, 46 weeks, at R220 an hour | R253 000 |
| Extra onboarding time | 10 new starters, 12 extra hours each at R220 an hour | R26 400 |
| Total |  | R351 400 |

Even if only a third of the lost-time estimate proves real, the total remains substantial. If the true figure is lower, the exercise still tells you where to look. It is not a prediction of savings, and the labour rows are the most assumption-dependent. Use your own headcount, rates and tool counts.

## The commercial trigger point

The tangle becomes urgent when:

- The business is about to grow, hire in numbers, open a branch or acquire another firm.
- A major system is nearing end of contract or being retired by its vendor.
- An integration or automation project keeps stalling because nobody understands the current setup.
- An audit, insurer or large customer asks for a list of systems and data flows, and you cannot produce one quickly.
- Someone who "just knows how it works" announces they are leaving.

## What designed looks like

Designed does not mean new, large or expensive. It means that someone has decided, on paper, what the business needs its systems to do, which tool does each job, where each kind of record lives, and how information moves between them. Decisions to add, keep or retire a system are made against that picture. Fewer tools do more of the work; each has an owner; and people can say what happens when something changes.

[Microsoft's Cloud Adoption Framework planning guidance](https://learn.microsoft.com/en-us/training/modules/cloud-adoption-framework/3-plan) offers a useful vocabulary even for small businesses. It advises discovering the existing inventory of workloads, gathering business details for each, including ownership, business function, criticality and data sensitivity, and prioritising them by business criticality and dependencies. Among its migration strategies it lists retiring redundant workloads, retaining stable ones and replacing others with software-as-a-service alternatives. Those categories translate neatly into questions any manager can ask of any system: keep it, replace it, or switch it off?

## Practical steps

1. **Build the inventory.** List every application, subscription and significant spreadsheet. Our guide to [building a useful business application inventory](/insights/how-to-build-a-business-application-inventory-that-is-actually-useful/) explains what to record.
2. **Record what each is for.** A single sentence: the job it does, who uses it, what it connects to and who owns it.
3. **Mark overlaps and orphans.** Two tools for one job, tools no one will own, tools with very low usage.
4. **Sketch the flows.** Draw one page showing where each kind of information starts and where it is copied. Gaps and loops will be obvious.
5. **Classify each system:** keep, replace, merge or retire. Our article on [deciding which software to remove](/insights/how-to-decide-which-software-to-remove/) offers criteria.
6. **Sequence the changes.** Start with the cheap, low-risk removals, then tackle the tangled ones. Never switch off a system before you know what depends on it.
7. **Add a gate for new tools.** Every addition must fit the picture or change it deliberately.
8. **Review yearly,** or at every major business change, and keep the picture current.

## A caution about tidy-ups

Resist the urge to replace everything at once. Large rebuilds of the whole estate are expensive and carry their own risks. Most of the benefit usually comes from a short list: remove the obvious duplicates, name the owners, agree the master for key records and connect the highest-volume bridges. The map itself is the most valuable output because it lets every later decision be made with the whole in view. For the broader picture of when a business has outgrown its arrangement, see [how to know when your operating system has outgrown the business](/insights/how-to-know-when-your-operating-system-has-outgrown-the-business/).

## The bottom line

A software environment that grew by accident rarely announces itself as a problem. It simply makes everything a little slower, a little costlier and a little riskier than it should be, year after year. The costs are real: duplicate subscriptions, hours lost to switching and searching, slower onboarding and a ceiling on growth. They are also largely hidden, because they are spread across people and budgets. Drawing the picture, deciding what each system is for and retiring what no longer earns its place does not require a transformation project. It requires someone to take responsibility for the whole, which is the step accident never takes.
