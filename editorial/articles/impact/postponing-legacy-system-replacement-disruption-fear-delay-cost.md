---
hub: impact
record_id: CPS-479
slug: postponing-legacy-system-replacement-disruption-fear-delay-cost
title: Why Postponing a Legacy System Replacement Usually Costs More
description: Putting off a replacement because change feels disruptive does not remove the cost, it spreads it across support, workarounds and risk until the change is forced.
lead: Putting off a replacement because change feels disruptive does not remove the cost, it spreads it across support, workarounds and risk until the change is forced.
category: Digital Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Continuing to run legacy systems because replacing them feels disruptive
primary_cost_mechanism: Technology waste and rising support cost, workaround labour, downtime, security risk exposure and a growing eventual migration cost
sources:
  - Obsolete products | https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products
  - Fixed Lifecycle Policy - Microsoft Lifecycle | https://learn.microsoft.com/en-us/lifecycle/policies/fixed
related:
  - Old Applications Kept Alive Because Moving the Data Feels Hard | /impact/old-applications-kept-because-data-migration-feels-difficult-delay-maintenance-risk-cost/
  - The Labour Cost Hidden Behind Software That Needs Constant Workarounds | /impact/software-needing-constant-manual-workarounds-hidden-labour-cost-behind-licence-fee/
  - Home-Grade Routers in a Working Business: What Network Instability Costs | /impact/consumer-grade-networking-business-operations-instability-cost/
summary: Putting off a replacement because change feels disruptive does not remove the cost, it spreads it across support, workarounds and risk until the change is forced.
layout: plain
---
## The system everyone works around

Nearly every established business has one: the core system that has been running for ten or fifteen years, that three people understand properly, and that everybody agrees should be replaced "at some point". It handles orders, stock, billing or job cards. It is slow, it crashes occasionally, and it needs a particular browser, a particular version of an office suite or a particular workstation tucked under a desk. Replacing it feels like open-heart surgery on a patient who is currently walking around, so the project is deferred for another year.

The deferral is understandable. The trouble is that it is treated as the safe choice, when it is actually a choice with its own costs that accrue quietly and are not on any budget line. This article looks at the financial price of postponing a change that is probably unavoidable, and at how to make the change smaller than it feels.

## Why the replacement keeps slipping

Replacement is dreaded for sound reasons. The old system encodes years of undocumented business rules. Staff know its quirks and have built habits around them. Data has to move. The business cannot stop trading while it changes, and a failed cut-over is visible to customers. Against that, the current system, for all its faults, works today.

Several biases combine to keep the status quo. The cost of change is concentrated, visible and immediate: a project budget, a disrupted month, a possible mistake with someone's name on it. The cost of delay is spread thin, invisible and gradual: a few hours of workaround each week, a slow erosion of options, a risk that has not yet materialised. Decision-makers rationally avoid the sharp, attributable cost, even when the diffuse one is larger.

## The costs of waiting

Legacy systems carry costs that do not appear as a replacement invoice but do appear in the business:

- **Rising maintenance and support.** Fewer people can support the technology, so each fix costs more and takes longer. Specialist rates climb as the skills become scarce.
- **Workarounds.** Staff export data to spreadsheets, retype information between screens and keep side lists because the system cannot do what the business now needs.
- **Security exposure.** Software that is out of vendor support stops receiving security fixes.
- **Integration limits.** New tools cannot connect to the old one, so each new capability needs manual bridging, as described in [business systems that do not talk to each other](/impact/business-systems-do-not-talk-integration-cost/).
- **Key-person dependency.** The knowledge of how the system really works lives in a few heads, a risk covered in [key-person operational dependency](/impact/key-person-operational-dependency/).
- **A shrinking window.** The longer the wait, the more data accumulates and the more processes depend on the system, which makes the eventual move bigger.

## What vendors and regulators say about unsupported software

The security point is the one most likely to turn a deferred decision into a sudden, expensive one, so it is worth being precise about what authoritative sources say. The UK National Cyber Security Centre's guidance on [obsolete products](https://www.ncsc.gov.uk/collection/device-security-guidance/managing-deployed-devices/obsolete-products) explains that products which no longer receive security updates are more likely to have publicly known vulnerabilities, often lack current security measures, and make high-impact incidents more likely. It also advises weighing the risk of continuing against the cost of replacement, reviewing a decision to keep using such a product regularly, and checking support lifetimes when buying. It states that interim mitigations reduce risk but do not remove it.

Microsoft's [Fixed Lifecycle Policy](https://learn.microsoft.com/en-us/lifecycle/policies/fixed) shows how this works in practice for one large vendor: a defined timeline from launch, a minimum of five years of mainstream support, an additional extended period for some products, and after that, security updates only through a paid Extended Security Update programme where one exists. The page itself notes that older products may not meet today's security requirements and that Microsoft may be unable to provide security updates for them. Most software vendors publish similar timelines. Whatever vendor you rely on, the date is public. What is often missing is someone in the business who looks it up.

CISA, the US cyber-security agency, maintains a [catalogue of known exploited vulnerabilities](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) and advises organisations to use it to prioritise patching, apply vendor mitigations, and, where no mitigation is available, to discontinue use of the product. The practical lesson for a business running unsupported software is that attackers do not need novel techniques. They need known weaknesses that nobody has fixed.

## How postponement becomes money

The cost mechanisms are technology waste, labour cost, risk exposure and opportunity cost. A simple way to bring them together is to put an annual price on staying:

> Annual cost of waiting = support and maintenance + workaround labour + incident and downtime cost + opportunity cost, with security exposure assessed separately

### An illustrative comparison

Imagine a small manufacturer with 40 staff running a 12-year-old order and stock system. Replacement is quoted at R650,000 including data migration, training and a parallel-run period. The directors have deferred it for three years. All figures are **illustrative assumptions**.

| Annual cost of keeping the old system | Assumption | Cost |
| --- | --- | --- |
| Specialist support and fixes | R15,000 a month | R180,000 |
| Workaround labour | 4 staff × 5 hours a week × 48 weeks × R300 per hour | R288,000 |
| Outages and recovery | 3 incidents a year × 6 hours × 20 staff idle × R250 per hour | R90,000 |
| Hardware kept alive to run it | Spare parts and extended warranty | R30,000 |
| **Total** |  | **R588,000** |

Check the arithmetic: 4 × 5 × 48 × R300 = R288,000. Three incidents × 6 hours × 20 people × R250 = R90,000. Adding R180,000 and R30,000 gives R588,000.

On these figures, a year of waiting costs nearly as much as the replacement itself, which means the project would pay back in roughly its own first year of avoided costs once the new system carries its own running costs, which would also need to be included. Three years of deferral is about R1.76 million in cumulative spend on a system the business already intends to replace. The honest caveat is that a new system has its own subscription or licence cost, and implementation overruns are real. That is why the comparison should include both sides, with ranges, rather than a single optimistic figure. The security exposure is deliberately left out of the total because it is a probability, not a certainty, and should be judged separately.

## Why waiting also raises the price of change

Delay does not freeze the cost of replacement. More records accumulate. More integrations are built around the old system. More staff learn its habits. The vendor of the replacement may change its pricing. And in the worst case, the old system fails or becomes unsafe before the replacement is ready, so the move happens in an emergency, with no time to design, test or train. Emergency migrations are consistently the most expensive and the most disruptive.

## When it becomes urgent

The signals are usually visible. The vendor has announced an end-of-support date. The only person who can fix the system gives notice. A customer or insurer asks about security of the platform. A new capability the business needs, such as online ordering or e-invoicing, cannot be added. Or workaround hours have crept above what a modest project would cost. Any one of these is a reason to bring the decision forward while there is still time to choose the timing.

## What better looks like

Better does not have to mean a big-bang replacement. It means a dated, owned plan. The business knows the support end-date of every core system, keeps a record of workarounds and their cost, and treats the replacement as a staged project: define the processes first, clean and archive data, move one function at a time where possible, run the old and new systems in parallel for a short period, and keep a tested way back. The same concerns arise for servers, and [ageing servers with no replacement date](/impact/ageing-server-no-replacement-date-failure-and-end-of-support-cost/) covers the hardware side.

## Practical steps

1. **List core systems with age, vendor support date and owner.** Highlight any past or within two years of end of support.
2. **Count the workarounds.** Ask staff what they do outside the system and how long it takes.
3. **Price staying.** Use the formula above with your own figures.
4. **Shrink the change.** Identify the smallest first step, such as archiving old records, moving one module or integrating one process.
5. **Set a decision date** and a named owner, so the discussion cannot be deferred indefinitely.
6. **Get an independent view** of options before talking to vendors. A [systems architecture roadmap](/services/digital-systems-architecture-roadmap/) can sequence the change in affordable steps.

## Bottom line

Postponing a replacement does not avoid its cost. It trades a visible, one-off expense for an invisible, repeating one, and it hands the timing of the change to whatever fails first. The question is rarely whether to replace the system, but whether to do it on the business's schedule or on the system's.
