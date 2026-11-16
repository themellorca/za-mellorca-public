---
hub: patterns
record_id: PAT-285
slug: when-operational-complexity-grows-faster-than-revenue
title: When Operational Complexity Grows Faster Than Revenue
description: Revenue rises steadily, yet the number of products, exceptions, systems and approvals rises faster. Here is how to see that gap and stop it eating your margin.
lead: Revenue rises steadily, yet the number of products, exceptions, systems and approvals rises faster. Here is how to see that gap and stop it eating your margin.
category: Growth, Scale & Headcount Efficiency
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Growth, Scale & Headcount Efficiency
pattern_family: Growth, Scale & Headcount Efficiency
observable_condition: Turnover grows steadily, but the count of products, price lists, customer-specific terms, systems, approval routes and special cases grows faster, and each month feels harder to run than the last.
primary_identification: Unmanaged variety: every new customer, product or exception is added to the operation and almost nothing is ever removed, so the cost of coordination rises faster than income.
commercial_value_dimensions: Margin, capacity, speed of delivery, error rates, management attention and scalability
sources:
  - https://learn.microsoft.com/en-us/power-automate/process-mining-overview | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
  - https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work | https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work
summary: Revenue rises steadily, yet the number of products, exceptions, systems and approvals rises faster. Here is how to see that gap and stop it eating your margin.
layout: plain
---
## Observable condition

Turnover is up on last year, and up again on the year before. Yet the business does not feel bigger in a good way. It feels heavier. There are more price lists than anyone can name, more customers on special terms, more product variants, more reports, more systems and more ways for an order to be approved. Month-end takes longer. New staff take longer to become useful. Senior people spend more of the week explaining how things work than making things work.

An illustrative example: a Durban packaging distributor grows sales by about a fifth over three years. Over the same period it goes from two price lists to eleven, from forty customers on standard terms to a long list of individual arrangements, and from one way of handling an order to six, depending on the branch, the customer and who took the call. Nobody decided to build that variety. It accumulated one reasonable yes at a time.

## Realisation

The realisation is that revenue and complexity are separate curves. Revenue is counted every month. Complexity is almost never counted at all, so nobody notices when it starts to climb faster. Each new variant looks small on its own: one more discount structure, one more report for one more manager, one more spreadsheet to handle one awkward customer. The cost is not in any single item. It sits in the coordination between all of them.

That coordination cost shows up in how people spend their day. [Microsoft's Work Trend Index research](https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work) reported that 62% of respondents spend too much of the workday searching for information and 64% struggle to find the time and energy to do their job. Those are global survey figures, not a measure of any one business, but they describe what complexity feels like from the inside: more time finding, checking and explaining, and less time producing.

**Realisation prompt:** how many different ways can an order, a quote or a payment move through your business today, and how many could it move through three years ago?

## Identification

This is a pattern of unmanaged variety. The visible symptom is an operation that feels harder to run every year even though it is not dramatically larger. The common assumption is that the business needs more people, or a bigger system, to keep up with growth. The structural cause is that the business adds variety with every new customer, product and exception, and has no habit of removing any. Complexity compounds, while revenue grows in a straighter line.

It overlaps with, but is not the same as, the situation described in [why adding people adds more coordination than capacity](/patterns/why-adding-people-adds-more-coordination-than-capacity/). Headcount is one source of coordination load. Variety in products, terms, systems and routes is another, and it can grow even when headcount stays flat.

## Diagnosis

- **Every exception becomes permanent.** A special price for one customer during a difficult quarter is still running four years later, and now three people must remember it.
- **Products are added and never retired.** Slow-moving variants keep their own stock, their own codes and their own pricing, and each one adds a small amount of work to every count, every catalogue and every report.
- **Systems are added beside, not instead of.** A new tool arrives for one need, the old one stays for the cases it still covers, and staff now carry both.
- **Process paths multiply.** Branches and teams develop their own versions of the same process. Each version works locally. Together they make the whole hard to see, hard to train and hard to change.
- **Nobody owns simplification.** Sales is rewarded for saying yes, operations for coping, finance for catching errors. No role is rewarded for removing a variant, so none are removed.

The amount of variety can be measured rather than guessed. Tools built for this purpose, such as the [process mining capability Microsoft describes for Power Automate](https://learn.microsoft.com/en-us/power-automate/process-mining-overview), extract event data from the systems of record to show how processes actually run, including how many different paths the same process takes. A smaller business can get a rough version of the same picture by pulling a sample of fifty recent orders and tracing the route each one took.

## Commercial impact

The commercial value at stake is margin, capacity and the speed at which the business can change direction.

Margin suffers because every variant carries a fixed cost of attention that is rarely charged back to the revenue it brings. A customer-specific arrangement that earns a little more on paper can cost more than it earns once the manual checks, the separate invoice format and the occasional dispute are counted.

Capacity suffers because the people who understand the variety become bottlenecks. The Impact note on [administration outpacing productive capacity](/impact/business-growth-administration-outpacing-productive-capacity-margin-cost/) sets out how that load reaches the margin line. Speed suffers because any change, whether a price increase, a new system or a new branch, must now be worked through every variant, so the business moves slower exactly when growth demands that it move faster.

Errors rise too. The more paths there are, the more likely it is that a step is skipped on the less common ones. Those errors land with customers, and correcting them consumes more of the capacity growth was supposed to create.

## Common misidentification

The usual reading is that the business has simply outgrown its people or its system. The response is to hire, or to buy a larger platform. Hiring adds capacity but also adds coordination. A new platform, implemented with every existing variant carried across, faithfully reproduces the complexity at greater cost. Neither removes the variety that caused the strain.

## Possibility

In a better state, the business knows how much variety it carries and treats each variant as a decision with a cost. New price structures, product codes, report types and process paths are added deliberately and reviewed on a schedule. Variants that no longer earn their keep are retired. Revenue can then grow without the operation becoming proportionally harder to run, which is the difference between growing and scaling. The Insight [why small operational problems become expensive at scale](/insights/why-small-operational-problems-become-expensive-at-scale/) explains how minor friction compounds as volume rises.

## Intervention

Begin by counting. Complexity that is listed can be discussed, priced and reduced. Complexity that stays invisible keeps growing.

## Practical next actions

1. **Build a variety register.** List the price lists, customer-specific terms, active product codes, systems in use, report types and approval routes. Note the count for each against the same count two or three years ago if you can reconstruct it.
2. **Trace a sample of real work.** Follow fifty recent orders or jobs from start to finish and record how many distinct routes they took. Compare that with the route your procedure describes.
3. **Price the bottom tenth.** For the least-used products, terms and reports, estimate the effort they consume each month against the revenue they support.
4. **Retire something every month.** Agree one variant to remove or merge each month, and communicate it to the customers or staff affected.
5. **Add a cost question to every new yes.** Before a new special arrangement, product or tool is approved, ask who will carry it, for how long, and when it will be reviewed.
6. **Give simplification an owner.** Name one person who reports quarterly on whether variety is rising or falling relative to revenue.

## Diagnostic questions

- Is turnover growing faster or slower than the number of products, terms and processes you carry?
- Which special arrangements exist only because nobody has asked whether they are still needed?
- How many different routes can the same type of order take through your business?
- Who in the business is rewarded for removing complexity rather than coping with it?
- If you replaced your main system tomorrow, how much of today's variety would you carry across without question?

## Article summary

When complexity grows faster than revenue, each year of growth costs more to run than the last, and the strain is usually blamed on people or systems rather than on the variety the business has accumulated. Counting that variety, pricing it and retiring what no longer pays for itself restores margin and makes further growth easier to carry. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine where the complexity sits and how Mellorca may be able to help.
