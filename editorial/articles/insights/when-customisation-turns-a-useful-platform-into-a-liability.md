---
hub: insights
record_id: INS-048
slug: when-customisation-turns-a-useful-platform-into-a-liability
title: When customisation turns a useful platform into a liability
description: Tailoring a platform helps up to a point. Beyond it, every update is a risk and you maintain what the vendor now provides. How to spot the turning point.
lead: Tailoring a platform to fit the business can be valuable, up to a point. Past that point, every update becomes a risk, only one partner understands the system and the business pays to maintain features the vendor now provides. How to recognise the turning point, take stock of existing customisation and set rules for the future.
category: Systems & Strategy
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Systems & Strategy
sources:
  - Extend Dynamics 365 apps without compromising performance - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/extend-your-solution
  - Optimize your implementation with a fit-to-standard and fit-gap analysis - Dynamics 365 | https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis
  - Open Standards principles | https://www.gov.uk/government/publications/open-standards-principles/open-standards-principles
related:
  - When a spreadsheet is a useful tool—and when it becomes infrastructure | /insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/
  - Why switching software is not always the answer | /insights/why-switching-software-is-not-always-the-answer/
  - How to avoid vendor-led architecture | /insights/how-to-avoid-vendor-led-architecture/
summary: Tailoring a platform to fit the business can be valuable, up to a point. Past that point, every update becomes a risk, only one partner understands the system and the business pays to maintain features the vendor now provides. How to recognise the turning point, take stock of existing customisation and set rules for the future.
layout: plain
---
Modern business platforms are built to be adapted. CRMs, ERPs, job management systems and accounting packages all let you add fields, change screens, build workflows and, with a developer, add custom code. That flexibility is one of the reasons businesses choose them. A platform shaped to fit the way the business works can remove a lot of manual effort.

But customisation has a cost that is easy to miss when each change is small. Every modification is something that must be understood, tested and maintained for as long as the platform is in use. Accumulate enough of them and the platform stops being a product the business uses and becomes a bespoke system the business has to look after, with all the cost and risk that implies.

## Configuration is not the same as customisation

It helps to separate three levels of change:

| Level | Examples | Risk over time |
| --- | --- | --- |
| Configuration | Choosing settings, adding standard fields, setting up users and permissions, using built-in workflows | Low. The vendor expects and supports it. |
| Extension | Adding new screens, automations or calculations on top of standard features using the vendor's supported tools | Moderate. Needs testing when the platform updates. |
| Custom development | Changing standard behaviour, writing custom code, building bespoke integrations, repurposing standard features for other uses | High. Needs specialist skills and careful upgrade management. |

Microsoft's implementation guidance for Dynamics 365 on [extending a solution](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/extend-your-solution) describes the same spectrum, from minor changes to the user interface to complex custom solutions, and notes that the depth of the extensions affects how much the off-the-shelf product changes. It warns that major deviations from native features, or repurposing existing ones, increase technical debt and maintenance costs. The principle applies to most business platforms, not only Microsoft's.

## How customisation accumulates

Few businesses set out to over-customise. It usually happens in one of three ways.

- **Recreating the old system.** During implementation, users ask for the new platform to work exactly like the one it replaced. Microsoft's guidance on [fit-to-standard and fit-gap analysis](https://learn.microsoft.com/en-us/dynamics365/guidance/implementation-guide/process-focused-solution-fit-to-standard-fit-gap-analysis) warns that this can lead to costly and unnecessary customisations requiring more design, coding, testing, training and documentation.
- **One request at a time.** After go-live, each team asks for small changes. Each is reasonable. Nobody looks at the total.
- **Working around the platform.** Instead of changing a process to fit a standard feature, the business pays to bend the platform around the process, even when the process itself was never examined.

## Signs the turning point has passed

Customisation becomes a liability when its cost and risk exceed the value it adds. The warning signs are usually visible well before a crisis:

- **Updates are feared.** Vendor updates are delayed or skipped because nobody is sure what they will break.
- **Only one partner understands it.** Changes, fixes and even simple questions must go through a single developer or implementation partner. Microsoft's guidance notes that dependence on another provider to maintain extensions means an unresponsive partner can block you from adopting new functionality.
- **You are paying for features twice.** The vendor has released a standard feature that does what your custom one does, but switching would mean rework. The Dynamics guidance specifically advises tracking roadmaps to avoid building something the vendor later offers natively, and the fit-gap guidance lists the potential redundancy of customisations as a factor to consider before building them.
- **Performance has degraded.** Screens load slowly and processes time out. The Dynamics guidance gives the example of a calculated field that performs heavy lookups for every record on a page.
- **Support is harder to get.** The vendor's support team cannot help because the problem sits in custom code, and the guidance notes that non-compliant extensions can put warranty or support terms at risk.
- **Integrations are fragile.** Bespoke connections break when either system changes. The UK government's [Open Standards principles](https://www.gov.uk/government/publications/open-standards-principles/open-standards-principles) make the case for reducing system complexity and the need for custom integration between solutions.
- **Training takes longer.** New staff cannot use standard vendor training because the system no longer looks or behaves like the standard product.

## Take stock of what you have

A business that sees several of these signs should start with a simple register of customisations. For each one, record:

1. what it does and which team relies on it;
2. the level: configuration, extension or custom development;
3. who built it and who can maintain it;
4. whether a standard feature now covers the same need;
5. what breaks or becomes manual if it is removed;
6. how often it has caused problems during updates.

This register will often reveal customisations that nobody uses any more, others that duplicate standard features and a smaller set that genuinely support how the business competes. Knowing which systems depend on which components is part of the same exercise; [how to identify the systems your business actually depends on](/insights/how-to-identify-the-systems-your-business-actually-depends-on/) covers the wider view.

## Reduce, replace or keep

Each item on the register falls into one of three groups:

- **Remove** customisations that are unused or whose purpose has gone.
- **Replace** custom features with standard ones where the standard feature is good enough, even if it means adjusting a process. This is usually where the largest reduction in risk comes from.
- **Keep and document** customisations that support something genuinely specific to the business and worth maintaining. Make sure they are documented, tested at every update and understood by more than one person or partner.

Work through the low-risk removals first, then the replacements, scheduling each around vendor update cycles. Heavy customisation is also a common reason businesses think they need a new platform; before reaching that conclusion, read [why your CRM is not the problem you think it is](/insights/why-your-crm-is-not-the-problem-you-think-it-is/).

## Set rules for the future

Once the current position is under control, a few rules prevent the problem from rebuilding:

- **Adopt before you adapt.** Microsoft's fit-to-standard guidance sums this up as adopting wherever possible and adapting only where justified. Ask first whether the process can change to fit the standard feature.
- **Name a platform owner** who approves customisations and holds the register.
- **Require a reason in business terms** for any custom development, including what it will cost to maintain.
- **Control changes.**[Why uncontrolled configuration changes create operational risk](/insights/why-uncontrolled-configuration-changes-create-operational-risk/) explains how unmanaged changes add up.
- **Test against vendor updates** on a regular schedule rather than discovering problems after release.

## An illustrative example

Consider an illustrative Johannesburg installation and maintenance company with 120 staff that had run the same field service platform for six years. Over that time its implementation partner had built more than 40 customisations. The company had skipped two major vendor updates because previous ones had broken its custom job-scheduling logic.

A register showed that 11 customisations were no longer used, nine duplicated features the vendor had since released, and six were critical. The company removed the unused items, moved to standard features for most of the duplicates after adjusting two internal processes, and documented the critical six with a second partner reviewing them. The next vendor update was applied within a month of release.

## Fit is valuable; bespoke is expensive

Customisation is not the problem. Unmanaged customisation is. A platform that fits the business through configuration and a small number of well-understood extensions keeps its value as the vendor improves it. A platform reshaped beyond recognition becomes a system the business must maintain alone. The difference lies in asking, every time, whether the change is worth carrying for as long as the platform is in use.
