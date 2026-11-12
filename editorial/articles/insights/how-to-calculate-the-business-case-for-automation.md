---
hub: insights
record_id: INS-155
slug: how-to-calculate-the-business-case-for-automation
title: How to calculate the business case for automation.
description: A practical automation business-case framework that includes labour, errors, cycle time, implementation, maintenance, exceptions and control.
lead: Automation ROI is not “hours saved multiplied by salary”. A credible case measures the operating problem, the value mechanism and the full cost of keeping the automation reliable.
category: Business Automation
published_date: 2026-09-01
updated_date: 2026-09-01
eyebrow: Article
page_title: How to Calculate the Business Case for Automation | Mellorca
tags:
  - Automation ROI
  - Business Case
  - Process Economics
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Topics
sources:
  - https://assets.publishing.service.gov.uk/media/698dbcd17da91680ad7f4308/The_Green_Book_2026.pdf | https://assets.publishing.service.gov.uk/media/698dbcd17da91680ad7f4308/The_Green_Book_2026.pdf
  - AI ROI: The paradox of rising investment and elusive returns | https://www.deloitte.com/global/en/issues/generative-ai/ai-roi-the-paradox-of-rising-investment-and-elusive-returns.html
  - Forrester studies project more than 100% ROI for enterprises and 16-month payback for midmarket organizations using Dynamics 365 ERP - Micro | https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2026/02/26/forrester-studies-project-more-than-100-roi-for-enterprises-and-16-month-payback-for-midmarket-organizations-using-dynamics-365-erp/
related:
  - Is your business actually ready for AI agents? | /insights/is-your-business-actually-ready-for-ai-agents/
  - Why automation documentation matters | /insights/why-automation-documentation-matters/
  - What service levels make sense for business-critical automations? | /insights/what-service-levels-make-sense-for-business-critical-automations/
---
Automation proposals often arrive with an attractive headline: this task takes ten minutes, happens hundreds of times a month, therefore automating it will save a large amount of money. That arithmetic is useful, but incomplete.

Time released is only valuable if the work really disappears, the automation is dependable, exceptions remain manageable and the organisation can redeploy the capacity. Build cost, integration work, licensing, monitoring, support and future change all belong in the calculation too.

Deloitte's 2025 research on [AI ROI](https://www.deloitte.com/global/en/issues/generative-ai/ai-roi-the-paradox-of-rising-investment-and-elusive-returns.html) is a useful warning against assuming that implementation quickly becomes value. In its survey of 1,854 executives across Europe and the Middle East, most respondents reported that satisfactory ROI on a typical AI use case took two to four years, against a typical expected payback of seven to 12 months for technology investments. Only six per cent reported payback in under a year. The research is AI-specific, but the lesson applies more broadly: value realisation depends on workflow redesign, infrastructure, adoption and operating change, not technology alone.

> The business case should describe how automation changes the economics of a process, not how impressive the automation looks in a demo.

## Why automation business cases overstate value

Most weak business cases fail in predictable ways. They multiply handling time by volume and treat the result as cash. They assume every case follows the standard path. They count the build cost but not the cost of running, monitoring and changing the automation for years afterwards. And they compare the automation with the current process, rather than with the cheaper improvements that could be made to it.

This tendency is well documented outside technology. The UK Treasury's [Green Book](https://assets.publishing.service.gov.uk/media/698dbcd17da91680ad7f4308/The_Green_Book_2026.pdf), the government's guidance on appraising proposals, describes optimism bias as a demonstrated, systematic tendency to be over-optimistic about costs, benefits and duration: costs typically turn out higher, benefits lower and delivery slower than originally anticipated. It requires appraisers to adjust for this explicitly at the outset. A private business is not bound by that guidance, but the discipline is worth borrowing.

## Build the baseline first

Measure the current process before designing the solution. At minimum, capture transaction volume, average handling time, waiting time, error or rework rate, exception rate, labour cost, service-level impact and any direct cost of delays.

Do not rely only on workshop estimates if system logs or work samples are available. A task that "takes five minutes" may take five minutes of handling but two days of waiting. Automation may create more value by reducing cycle time than by removing labour.

## Separate hard value from soft value

Hard value can include avoided contractor spend, reduced overtime, lower transaction-processing cost, prevented penalties, lower software cost or headcount capacity that genuinely does not need to be added. Soft value may include faster response, more consistent control, better employee experience or increased management visibility.

Both matter, but label them honestly. Do not count every saved minute as cash unless that capacity can actually be removed or redirected to measurable output. Released time that is absorbed into slightly longer breaks and slightly slower handling is real for the employee, but it does not appear in the accounts.

## Include the full automation cost

A useful total-cost model includes discovery, process redesign, build, integrations, licences or usage charges, testing, security review, documentation, training, monitoring, exception handling, maintenance and future modification when surrounding systems change.

AI-based automations may add model usage, evaluation, guardrails and human-review costs. Traditional rule-based automation may have lower variability but still needs ownership and failure handling. The run cost of an automation nobody watches is low until it fails silently, at which point it can be very high; this is discussed in [how silent automation failures damage operations](/insights/how-silent-automation-failures-damage-operations/).

## Model three scenarios

Use a conservative, expected and upside case. Vary transaction growth, adoption, exception rate, maintenance effort and percentage of theoretical time savings that becomes real economic value. This makes the decision less dependent on one optimistic assumption.

> Annual net benefit = realised labour or capacity value + avoided error or delay cost + other measurable benefit − annual run and support cost.

Then compare the upfront investment to cumulative net benefit to estimate payback, and use NPV or an internal hurdle rate for larger programmes. The specific finance method can vary; the discipline of modelling the whole lifecycle should not.

### An illustrative example

*The figures below are hypothetical and chosen only to show the method.* A team processes 1,000 supplier invoices a month, each taking eight minutes to key. The headline calculation says automation saves about 133 hours a month. But suppose 20% of invoices are exceptions that still need a person, the automation needs a few hours of support each month, and only half of the released time can genuinely be redeployed. The realised value is then well under half the headline figure before any build or licence cost is subtracted. The automation may still be worthwhile, particularly if it also shortens payment cycles, but the case now rests on evidence rather than arithmetic.

| Assumption | Conservative | Expected | Upside |
| --- | --- | --- | --- |
| Share of cases automated end to end | Lower | Measured from baseline | Higher |
| Share of released time that becomes real value | Low | Moderate | High |
| Annual maintenance and change effort | Higher | Estimated | Lower |
| Volume growth | Flat | Planned | Above plan |

## Compare automation with alternatives

The strongest business case includes the option not to automate. The Green Book requires the business-as-usual option to be carried forward as a benchmark against which every other option is compared. Could the same result come from removing a process step, changing a policy, configuring existing software, improving a form, training users or integrating two systems? If a simpler intervention solves most of the problem, automation may not be the best first investment.

Vendor-commissioned economic studies can illustrate possible value but should not be treated as a forecast for your organisation. For example, Microsoft [commissioned Forrester Consulting](https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2026/02/26/forrester-studies-project-more-than-100-roi-for-enterprises-and-16-month-payback-for-midmarket-organizations-using-dynamics-365-erp/) to model returns from Dynamics 365 ERP, using a composite organisation based on customer interviews and survey responses. Results of that kind depend on the composite and its assumptions. Your own baseline should drive your case.

## Warning signs in an automation proposal

- The benefit is expressed only in hours saved, with no explanation of what happens to those hours.
- There is no measured baseline, only estimates from a workshop or a vendor.
- Exceptions are not mentioned, or are assumed to be negligible.
- Run, monitoring and maintenance costs are missing or described as minimal.
- No named person owns the automation after launch.
- There is no plan to measure whether the benefit actually arrived.

## A practical diagnostic

Before approving an automation investment, ask the sponsor to answer, in writing:

1. What does the process cost now, and how was that measured?
2. Which specific costs or delays will fall, and by how much in each scenario?
3. What happens to cases the automation cannot handle?
4. What is the full lifecycle cost, including support and change?
5. Which simpler alternatives were considered, and why were they rejected?
6. When and how will realised value be compared with the forecast?

## The trade-offs

A rigorous business case takes time and can delay small, obviously useful automations. For low-cost, low-risk changes, a lighter version of the same questions is sensible. For larger or AI-based programmes, the cost of a weak case is much higher: it locks the organisation into running and maintaining something whose value was never demonstrated. The level of rigour should match the size of the commitment.

## What better looks like

A credible automation proposal can answer six questions: what problem exists now, how often it occurs, what it costs, what will change, what the automation will cost over its lifecycle, and how the organisation will verify value after launch.

If those answers are missing, the project is still an automation idea, not yet an investment case.

[Business Automation & AI Workflows](/services/business-automation-ai-workflows/) starts with the workflow and value mechanism, not the tool. A [Digital Systems Audit](/services/digital-systems-audit/) can identify and prioritise automation opportunities across the wider operating environment.
