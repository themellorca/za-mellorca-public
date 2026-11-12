---
hub: insights
record_id: INS-016
slug: why-growth-exposes-problems-that-were-already-there
title: Why Growth Exposes Problems That Were Already There
description: Many problems blamed on growth were present all along, hidden by spare capacity, a few capable people, proximity and low volume. What masks defects in a smaller business, why more volume makes them visible, and how to find them before the next stage of growth does.
lead: Many problems blamed on growth were present all along, hidden by spare capacity, a few capable people, proximity and low volume. What masks defects in a smaller business, why more volume makes them visible, and how to find them before the next stage of growth does.
category: Digital Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Digital Operations
sources:
  - Systems Approach - PSNet | https://psnet.ahrq.gov/primer/systems-approach
  - https://books.hse.gov.uk/gempdf/hsg48.pdf | https://books.hse.gov.uk/gempdf/hsg48.pdf
  - https://people.cs.umass.edu/~emery/classes/cmpsci691st/readings/OS/Littles-Law-50-Years-Later.pdf | https://people.cs.umass.edu/~emery/classes/cmpsci691st/readings/OS/Littles-Law-50-Years-Later.pdf
related:
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
  - Why Operations Become Fragile Before They Become Obviously Broken | /insights/why-operations-become-fragile-before-they-become-obviously-broken/
  - Before you automate, understand how the work actually moves | /insights/before-you-automate-understand-how-the-work-actually-moves/
summary: Many problems blamed on growth were present all along, hidden by spare capacity, a few capable people, proximity and low volume. What masks defects in a smaller business, why more volume makes them visible, and how to find them before the next stage of growth does.
layout: plain
---
When a growing business starts to struggle, it is natural to describe the problems as new. Orders are being missed, invoices are late, customers are complaining about inconsistent service, and none of this happened two years ago. The conclusion seems obvious: growth has created these problems.

Usually it has not. In most cases the problems were there all along. A missing step in the order process, an unclear rule about who approves discounts, a customer record held in two places, a reconciliation nobody quite owned. At lower volumes they caused occasional friction that somebody absorbed. Growth did not create them. It removed whatever was hiding them.

## What hides problems in a smaller business

Understanding what was masking the problems matters, because it tells you where to look before the next stage of growth exposes something else. Four masks are common.

### Slack

A small team with spare capacity can absorb rework without anyone noticing. When an order has to be corrected, someone has the time to do it. The rework still exists; it is just paid for out of slack. As volume rises, slack disappears and the same rework starts to cause queues and missed deadlines.

### Heroics

One or two capable people quietly catch and fix things: the bookkeeper who spots the duplicate invoice, the operations lead who remembers the customer's special delivery instructions. Their effort makes the process look sound. When volume outgrows what they can personally see, the defects they were catching begin to reach customers.

### Proximity and memory

When everyone sits together and the founder knows every client, information gaps are covered by conversation. Nobody needs a reliable record because someone can always be asked. Add a second site, a remote team or simply more customers than anyone can remember, and the gaps show.

### Low frequency

An error that happens in one transaction in two hundred is invisible at forty transactions a month. At four thousand a month it happens twenty times, and it becomes a recognisable, recurring cost with its own complaints and workarounds.

## Latent conditions, not new failures

Safety science has a term for this. The [systems approach](https://psnet.ahrq.gov/primer/systems-approach) described by the US Agency for Healthcare Research and Quality distinguishes active errors, which happen at the point of work, from latent errors, which are failures of organisation or design that sit unnoticed until conditions allow them to cause harm. It calls latent errors accidents waiting to happen.

Growth is one of the most reliable ways for those conditions to line up. It raises workload, increases interruptions and adds new staff who do not know the informal fixes. The UK Health and Safety Executive's guidance on [reducing error and influencing behaviour](https://books.hse.gov.uk/gempdf/hsg48.pdf) lists high workload, constant interruptions, unclear instructions and poor work planning that creates pressure among the job and organisational factors behind human failure. Those are exactly the conditions rapid growth produces.

## Why more volume means more to track

There is a simple relationship that explains why growth makes hidden delays visible. Little's Law, first proved by John Little in 1961 and revisited in his [50th-anniversary review](https://people.cs.umass.edu/~emery/classes/cmpsci691st/readings/OS/Littles-Law-50-Years-Later.pdf), states that the average number of items in a system equals the average arrival rate multiplied by the average time each item spends in the system.

In business terms: if a business receives ten new jobs a day and each takes eight working days from enquiry to invoice, it has about eighty jobs open at any time. Double the intake and keep the same eight days, and there are about one hundred and sixty open jobs. Nothing about the process has got worse, but there is twice as much to keep track of, twice as many items waiting on customers or suppliers and twice as many chances for a job to stall unnoticed. If the process also contains waiting time that nobody manages, the time per job tends to stretch under load, and the number of open jobs grows faster still.

This is why the first symptom of growth is often a feeling of losing track rather than a single dramatic failure.

## An illustrative example

Consider a hypothetical Gqeberha manufacturer of custom signage that doubles its order book over eighteen months after winning several retail chain contracts. Soon, artwork approvals are being missed and some jobs are produced from superseded designs.

On investigation, the business finds that artwork versions had always been managed by email, with the production manager checking the latest version by memory before releasing each job. That step had never been written down or built into the job system. It had worked because the production manager handled every job personally. Once there were too many jobs for one person to check, superseded artwork started slipping through. The defect had existed since the business began; it had simply been caught by one person's attention.

The fix was to record the approved artwork version against the job and block release to production until it was attached. It took days to implement, and it would have been just as valuable when the business was half the size.

## Finding hidden problems before growth does

The good news is that latent problems can be found deliberately. Useful questions to ask of each core process:

1. **What does a capable person quietly correct?** Ask the people who catch problems what they catch. Their answers are a list of latent defects.
2. **What would happen at double the volume?** Walk through the process imagining twice the work and the same people. Where would work queue or be skipped?
3. **Which steps rely on memory?** Any step that works because someone remembers is a step that will fail when that person is busy or away.
4. **What broke during your last busy period?** Year-end, a large contract or a seasonal peak is a preview of growth. The problems that appeared then are the ones growth will make permanent.
5. **How many items are open right now, and how old are they?** If nobody can answer quickly, the business is relying on proximity to know what is happening.

The answers usually produce a short list of fixes: record what is remembered, make waiting visible, give exceptions a defined path and remove re-keying. Most are cheaper before growth than after it, when they have to be done while the business is already under strain.

## Warning signs that growth is uncovering old problems

- The problems are described as "suddenly" happening, but nothing in the process has changed.
- A specific experienced person is under heavy pressure, and errors rise when they are away.
- New staff make mistakes that long-serving staff "would never make".
- Busy periods produce the same kinds of failure every year.
- The proposed fix is another hire to do the checking.

The last one is worth pausing on. Hiring someone to catch defects can be the right short-term answer, but it repeats the pattern that hid the problem in the first place. [Scaling by adding headcount](/impact/scaling-by-adding-headcount/) carries costs of its own.

## How this relates to other growth problems

Some growth problems genuinely are new. Coordination between more people, teams and sites grows faster than headcount, which is the subject of [why growth breaks systems that worked when the business was smaller](/insights/why-growth-breaks-systems-that-worked-when-the-business-was-smaller/). Small inefficiencies also multiply with volume, as [why small operational problems become expensive at scale](/insights/why-small-operational-problems-become-expensive-at-scale/) explains. This article is about a third category: the defects that were always there and are only now visible. Separating them matters, because the old defects are usually the cheapest to fix and the most embarrassing to keep.

## The trade-offs

No business can find every latent problem in advance, and trying to engineer for volumes you may never reach is wasteful. The practical aim is narrower: find the defects that capable people are currently absorbing, and fix those in the processes that carry the most volume. That is a manageable list, and it turns growth from something that exposes the business into something it is ready for.
