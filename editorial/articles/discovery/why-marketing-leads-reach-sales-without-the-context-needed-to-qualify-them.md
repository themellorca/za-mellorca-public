---
hub: discovery
record_id: DISC-208
slug: why-marketing-leads-reach-sales-without-the-context-needed-to-qualify-them
title: Marketing leads arrive without useful qualification context
description: A name and an email address are not a lead sales can work. What to capture at the point of enquiry, how to hand it over, and how to feed outcomes back to marketing.
lead: A name and an email address are not a lead sales can work. What to capture at the point of enquiry, how to hand it over, and how to feed outcomes back to marketing.
category: Sales Operations & CRM
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: Sales operations manager, working with the marketing manager
budget_owner: Sales director or managing director
sources:
  - About lead form assets - Google Ads Help | https://support.google.com/google-ads/answer/9423234
  - Manage offline conversions - Google Ads API - Google for Developers | https://developers.google.com/google-ads/api/docs/conversions/upload-offline
related:
  - Lead response rules treat a demo request like a download | /discovery/lead-response-rules-treat-a-demo-request-like-a-download/
  - Salespeople update the CRM only before forecast meetings | /discovery/why-crm-updates-happen-only-before-forecast-meetings/
  - Sales cannot see a customer's credit or service problems | /discovery/sales-cannot-see-a-customer-s-credit-or-service-problems/
summary: A name and an email address are not a lead sales can work. What to capture at the point of enquiry, how to hand it over, and how to feed outcomes back to marketing.
layout: plain
---
Marketing reports a good month: two hundred and forty new leads. Sales opens the list and finds a name, an email address and, for roughly half, a phone number. There is no indication of what the person asked for, which page they were reading, how big their company is or when they hope to buy. The reps ring the most recent twenty, reach a handful, and quietly decide the rest are not worth the effort. At the quarterly review the forecast is short, marketing points to the volume, and sales points to the quality. Both are right, and the cause sits in the data that travelled between them.

## The problem in plain language

A lead is only useful to a salesperson if it answers four questions: who is this, what do they want, how urgently, and what have we already told them. Many forms and ad campaigns capture the first and ignore the rest. The result is a queue of contacts that all look the same, which makes it impossible to decide whom to ring first and impossible to say why some convert and others do not.

## What the buyer is actually trying to solve

A sales operations manager or marketing lead typing this problem into a search engine is usually trying to fix a forecast. Pipeline coverage looks healthy on paper but closes at a lower rate than planned, and nobody can tell which sources are responsible. They want to know what to capture at the point of enquiry, how to pass it to sales, and how to get the outcome back to marketing so that spending follows results.

## Evidence and system mechanism

### Lead forms collect exactly what they are configured to collect

Google's help page on [lead form assets](https://support.google.com/google-ads/answer/9423234) describes how an advertiser builds a form that appears with an advert, choosing which questions are asked and which contact details are collected. Whatever is not added to the form is not captured. If the form asks only for a name and an email address, every lead from that campaign arrives with nothing else to help a salesperson. The same is true of website forms, event badge scans and phone calls logged by reception.

### The outcome rarely travels back

Google's developer documentation on [importing offline conversions](https://developers.google.com/google-ads/api/docs/conversions/upload-offline) explains that an advertiser can send results that happen outside the website, such as a lead becoming a customer, back to the advertising platform so that campaigns can be judged on real outcomes. It is a useful illustration of what is possible. In most small and mid-sized businesses the loop is not closed: the advertising platform counts form submissions as successes, so it optimises for more submissions, not better ones. Volume rises, quality falls, and nothing in the report shows it.

### Personal information needs a stated purpose

The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) requires that personal information is collected for a specific, defined purpose and that the person knows why. This is not an argument for collecting less qualification data. It is a reason to be deliberate: ask only questions that help you respond, explain why you ask them, and avoid storing free-text notes that go beyond what the person offered. Have your information officer confirm how the Act applies to your forms.

### Warning signs

- Sales calls start with questions the prospect already answered on the website.
- Reps cherry-pick leads by name recognition or company website, not by any recorded criterion.
- Marketing cannot tell which campaign produced last quarter's biggest deal.
- The same source is judged excellent by marketing and useless by sales.

## Why this becomes urgent

The problem hides when volumes are low, because a founder reads every enquiry. It surfaces when spending rises, when a second salesperson joins, or when a forecast miss makes someone ask where the pipeline went. Each forecast miss that traces back to weak leads wastes the following quarter's marketing budget, because the same sources are funded again. That is why forecast misses are the common trigger for fixing it.

## Economic consequence

The most visible cost is salesperson time spent on leads that were never going to buy, or leads that were ready to buy but sat in the queue behind noise. The less visible cost is the budget: money continues to flow to channels that generate cheap, shallow enquiries because the system counts them as wins. The slowest cost is the forecast itself. When stage conversion rates are calculated on a mixed pool of leads, the numbers do not repeat from one quarter to the next. For related effects of slow or neglected follow-up, see [untouched leads and follow-up failure](/impact/untouched-leads-invisible-follow-up-failure-revenue-cost/).

## Root cause

- **Capture designed for conversion rate, not for use.** Short forms lift submissions, and nobody owns the cost to sales.
- **No agreed definition of a ready lead.** Marketing and sales use different words for the same thing, a problem explored in [why good leads disappear between marketing and sales](/patterns/why-good-leads-disappear-between-marketing-and-sales/).
- **Context is lost in transfer.** Details collected on a form are re-typed or truncated before they reach the CRM, as described in [retyping website enquiries into the CRM](/impact/retyping-website-enquiries-into-crm-lead-capture-cost/).
- **No feedback.** Salespeople learn why a lead failed, but the reason is never recorded in a form marketing can use.

## Practical intervention

1. **Agree what a usable lead contains.** Five or six fields: the need in the person's words, company size or type, the product of interest, the timeline, the source and the page or campaign that produced the enquiry.
2. **Add qualification questions where they are cheap.** A single dropdown for timeline or need is cheaper than a call to find out. Test whether it lowers the submission rate, and balance that against lead quality.
3. **Write down the handover standard.** A lead passes to sales only when it has the agreed fields, or it goes into a nurture track with its own owner.
4. **Record the outcome on the lead.** Use a short, closed list of reasons for lost or disqualified leads so that patterns can be counted.
5. **Report on outcome by source.** Replace submission counts with qualified leads and closed deals per channel, and reallocate spending monthly.

### Trade-offs

More questions will reduce form completion, and some prospects prefer to talk to a person before disclosing detail. Treat the form as one of several routes. A call-back option for people who do not want to fill in detail keeps the door open, while the longer form attracts people with a clearer intent.

## Diagnostic questions

- Can a salesperson see the prospect's stated need before the first call?
- Do marketing and sales use the same definition of a qualified lead, in writing?
- Can you list closed deals by original source for the last two quarters?
- What fraction of leads are rejected by sales, and are the reasons recorded?

## What good looks like

Every lead arrives with a stated need, a timeline and a source. Sales ranks the queue by evidence rather than instinct. Disqualified leads carry a reason, and marketing reads those reasons weekly. Forecast conversion rates are stable enough to plan from, and the next quarter's budget follows the sources that produced customers, not clicks. Ask how your own workflow compares with the stages in [designing CRM stages that match what your team actually does](/insights/how-to-design-crm-stages-that-match-what-your-team-actually-does/).

## Practical next actions

1. Pull the last fifty leads that reached sales and mark which of the six useful fields each one contained.
2. Hold a one-hour session with a marketing lead and a senior salesperson to write one definition of a qualified lead.
3. Add one or two qualification questions to your highest-volume form and compare quality over a month.
4. Add a mandatory loss reason to the CRM, drawn from a list of no more than eight options.
5. Produce a one-page report of qualified leads and closed deals by source, and review it with both teams.

## Where Mellorca fits

Mellorca maps the route a lead takes from first enquiry to closed deal, finds where context drops out, and helps design the capture fields, handover rules and reporting. The goal is a forecast that sales and marketing both trust.

## Method note

The sources describe how lead forms are configured, how outcomes can be returned to an advertising platform and the purpose principle in South African privacy law. They do not measure lead quality in any business. The scenario is illustrative.
