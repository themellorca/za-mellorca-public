---
hub: impact
record_id: CPS-427
slug: slow-website-visitors-leave-before-enquiring-page-speed-revenue-cost
title: Slow Website, Lost Visitors: The Revenue Cost of Poor Page Speed
description: Visitors who leave a slow page before it loads never appear as a lost sale, but the missing enquiries and wasted advertising spend are real and can be estimated.
lead: Visitors who leave a slow page before it loads never appear as a lost sale, but the missing enquiries and wasted advertising spend are real and can be estimated.
category: Digital Operations
published_date: 2026-10-11
updated_date: 2026-10-11
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Website pages load so slowly that potential customers leave before engaging
primary_cost_mechanism: Revenue loss from missed enquiries plus wasted advertising spend on visitors who leave before the page loads
sources:
  - Web Vitals - Articles - web.dev | https://web.dev/articles/vitals
  - Why does speed matter? - web.dev | https://web.dev/learn/performance/why-speed-matters
  - Understanding Core Web Vitals and Google search results - Google Search Central - Documentation - Google for Developers | https://developers.google.com/search/docs/appearance/core-web-vitals
related:
  - Forms That Email Instead of Update: The Cost of Slow Replies and Lost Enquiries | /impact/website-forms-emailing-instead-of-updating-systems-response-cost/
  - Catching Up Before Starting: The Cost of Poor Handovers and Scattered Updates | /impact/catching-up-after-absence-poor-handover-cost/
  - Replacing Devices Only When They Break: The Real Price of Emergency Buying | /impact/buying-devices-only-when-they-break-emergency-replacement-cost/
summary: Visitors who leave a slow page before it loads never appear as a lost sale, but the missing enquiries and wasted advertising spend are real and can be estimated.
layout: plain
---
## The visitor who never arrives

Most owners judge their website by how it looks on the office fibre connection, on a good laptop, after the page has been opened a dozen times. It feels fine. The people who matter, a prospective customer on a mid-range phone, on mobile data, somewhere between a meeting and a school run, see something different: a blank screen, a page that jumps as it loads, a button that does not respond when tapped. Many of them simply go back to the search results and click the next business.

That lost visitor never appears in any report as a loss. There is no failed order, no complaint, no cancelled quote. There is only an enquiry that did not happen. This article is about the money behind that silence, and about why a slow website is one of the few problems where the cost is large, the evidence is free and the fix is usually modest.

## Why slow sites are tolerated

Three habits keep the problem alive. First, the people who commission and approve the site are not the people who suffer it: they know where to click and they have a fast connection. Second, speed is rarely written into the original brief, so nobody is accountable for it. Third, slowness arrives gradually. A new image slider, a chat widget, a tracking script, a booking plug-in and a font library are each added for a sensible reason, and each adds a little weight until the page crosses from acceptable to frustrating without anyone deciding that it should.

There is also a quiet assumption that speed is a technical nicety, something for developers to worry about. The evidence points the other way. Google's web.dev guidance on [why speed matters](https://web.dev/learn/performance/why-speed-matters) says fast sites keep visitors engaged while slow ones lose them, that people on poor connections and modest devices are hit hardest, and that users compare your site with the best services they use, not with your direct competitors. In South Africa, where a large share of browsing happens on phones and mobile data, the visitor most likely to be punished by a heavy page is the ordinary customer, not the unusual one.

## What it looks like in the business

The symptoms rarely look like a performance problem. They look like something else:

- **High bounce rates** on landing pages that you pay to send traffic to.
- **Paid advertising that seems expensive**, because part of every rand spent buys a click that leaves before the page finishes loading.
- **Enquiry forms that are visited but rarely submitted**, particularly on mobile.
- **Complaints that the site is "difficult"** from customers who then phone or WhatsApp instead, moving work into the busiest channel.
- **Good desktop results and poor mobile results** in the same analytics report.

None of these is proof of a speed problem on its own. Together they are a reason to measure it.

## How the delay becomes money

The mechanism is revenue loss with a smaller amount of wasted marketing spend on top. It can be stated in a line:

> Lost revenue per month = visitors × share who leave because of slowness × enquiry rate × close rate × average order value

Most of those terms are already in your analytics or your sales records. The one that is hard to know is the share who leave because of slowness, which is why a measurement exercise matters.

### An illustrative calculation

Take a small South African services business that attracts 4,000 website visitors a month, mostly from search and a modest advertising budget. Every figure below is an **illustrative assumption**, not a benchmark.

| Input | Assumption |
| --- | --- |
| Monthly visitors | 4,000 |
| Enquiry rate when the page loads well | 3% |
| Enquiry rate on slow loads | 1.5% |
| Share of visitors who experience a slow load | 40% (1,600 visitors) |
| Enquiry-to-sale close rate | 20% |
| Average first-sale value | R12,000 |

On those assumptions, the slow-load group produces 1,600 × 1.5% = 24 enquiries. If they behaved like everyone else, they would produce 1,600 × 3% = 48. The gap is 24 enquiries a month. At a 20% close rate that is about 4.8 sales, or roughly R57,600 of first-sale revenue a month. Over a year that is about R691,000, before repeat business.

Change the assumptions and the number changes, sometimes drastically. A business with a lower average sale and a smaller slow-loading share might lose a tenth of that. The point of the model is not the answer. It is that the answer can be calculated with figures you already hold, and that even a modest slow-load share can cost more than a year of hosting, maintenance and a proper performance clean-up combined.

The advertising effect is separate. If the same business spends R20,000 a month on search advertising and 40% of the clicks land on a slow page, then a large part of R8,000 of that budget is buying visitors who are already half-lost. Again, that is a modelled exposure, not a measured loss, but it shows where to look.

## What the evidence says, and what it does not

Be careful with headline numbers. The case studies collected on web.dev, including a retailer that reported a 33% rise in conversion rate after performance work, and a telecoms group that reported an 8% increase in sales after improving its largest contentful paint by 31%, are results from large, specific sites. They show that the effect is real and commercial. They do not tell you what your site would gain, and you should not paste them into a budget.

What you can rely on is the measurement framework. Google defines three Core Web Vitals and a "good" threshold for each, assessed at the 75th percentile of real page loads, according to [web.dev's explanation of the vitals](https://web.dev/articles/vitals):

- **Largest Contentful Paint** (how quickly the main content appears): 2.5 seconds or less.
- **Interaction to Next Paint** (how quickly the page responds when tapped or clicked): 200 milliseconds or less.
- **Cumulative Layout Shift** (how much the page jumps while loading): 0.1 or less.

Google also states in its [Search documentation on Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) that it highly recommends good scores for success in Search, while not claiming a precise ranking weight. Treat speed as one factor among many, and as a useful lever for people already visiting, regardless of ranking.

## Secondary consequences

A slow site costs more than lost enquiries. Staff field phone calls from people who could not complete a form. Marketing teams chase explanations for poor campaign performance and sometimes change the advertising when the page was the problem. And a slow site tends to be a heavy one, built from layers of add-ons that no one owns, which makes every later change slower and more expensive. For the related problem of a website that works but whose enquiries then go nowhere, see [when your website is up but the business process behind it is down](/patterns/when-your-website-is-up-but-the-business-process-behind-it-is-down/), and for what happens after a form is submitted, [website forms failing silently](/impact/website-forms-failing-silently/).

## When it becomes urgent

The trigger is usually a decision that raises the stakes: a new advertising budget, a seasonal peak, a redesign, or a plan to move more sales online. Spending more to send people to a page that loses a large share of them is the worst moment to discover the problem. If you are about to increase traffic, measure first.

## What better looks like

A well-run business site has a performance budget, a small number of approved scripts and a named owner. Images are sized for the screen that displays them. Third-party tools are reviewed twice a year and removed if nobody can say what they earn. The three vitals are checked on real mobile traffic, not just on the developer's laptop, and the results are reviewed alongside enquiry numbers rather than in a separate technical report.

## Practical steps

1. **Measure on a mid-range phone** using mobile data, not office Wi-Fi. Test your five most important pages, starting with the ones you pay to promote.
2. **Check real-user data** where it exists, such as the Core Web Vitals report in Search Console, and note which pages fail which metric.
3. **Audit what loads.** List every script, plug-in and font, and what each is for. Remove anything without a clear commercial purpose.
4. **Fix the biggest items first**: oversized images, an unoptimised hero banner, a heavy slider, an unnecessary chat widget loaded on every page.
5. **Model the cost** using your own visitor, enquiry and close figures, then compare it with the cost of fixing.
6. **Assign an owner** and set the three thresholds as acceptance criteria for any future site change.

## Bottom line

A slow website is a leak in the front door of the business. It rarely announces itself, and the loss is spread across hundreds of visitors who never become a number. The economic meaning is simple: every rand spent attracting visitors is worth only as much as the share who stay long enough to act. Measuring speed on the devices your customers actually use, and fixing the few items that cause most of the delay, is one of the cheapest ways to make existing traffic earn more. If a slow response to enquiries is also part of your picture, [the revenue cost of slow lead response](/impact/slow-sales-lead-response-revenue-cost/) is the natural next read.
