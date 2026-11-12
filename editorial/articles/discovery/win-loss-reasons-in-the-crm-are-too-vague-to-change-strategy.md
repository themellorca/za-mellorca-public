---
hub: discovery
record_id: DISC-218
slug: win-loss-reasons-in-the-crm-are-too-vague-to-change-strategy
title: Win-loss reasons in the CRM are too vague to change strategy
description: A pick-list filled in by the salesperson at close says "price" or "other". Redesign reasons around decisions, add a short debrief for big deals, hear from buyers and review quarterly.
lead: A pick-list filled in by the salesperson at close says "price" or "other". Redesign reasons around decisions, add a short debrief for big deals, hear from buyers and review quarterly.
category: Sales Operations & CRM
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: Head of sales operations
budget_owner: Sales director
sources:
  - Close opportunities as won or lost | https://learn.microsoft.com/en-au/dynamics365/sales/close-opportunity-won-lost-sales
  - Fix Opportunity Closing and Pipeline Errors - Dynamics 365 Sales | https://learn.microsoft.com/en-us/troubleshoot/dynamics-365/sales/troubleshoot-opportunities-issues
  - Broad-Based Black Economic Empowerment Act, 2003 (Act No. 53 of 2003) - Annexe 400(A) - Acts Online | https://www.acts.co.za/broad_based_black_econom/n1019_annexe_400a
related:
  - Quotes move to spreadsheets when CRM pricing cannot be trusted | /discovery/quotes-move-to-spreadsheets-when-crm-pricing-cannot-be-trusted/
  - Nobody keeps customer contact roles current after the deal | /discovery/nobody-keeps-customer-contact-roles-current-after-the-deal/
  - Account hierarchies do not reflect real customer relationships | /discovery/why-crm-account-hierarchies-miss-how-customers-are-really-connected/
summary: A pick-list filled in by the salesperson at close says "price" or "other". Redesign reasons around decisions, add a short debrief for big deals, hear from buyers and review quarterly.
layout: plain
---
Picture a Cape Town supplier of industrial software after a quarter in which the sales forecast was missed by a wide margin. The managing director asks the sales director a simple question: why did we lose the deals we expected to win? The sales director opens the CRM and filters for lost opportunities. Most of them carry one of two reasons, "price" or "other". A few say "competitor".

The leadership team does what the data suggests. It reviews pricing, and a round of discounts follows. The next quarter's forecast is missed again. A few weeks later, the sales director phones five of the lost buyers herself. They give reasons the CRM never recorded: the customer's procurement policy required a supplier with a better B-BBEE level, the product could not connect to the customer's ERP, the technical questions took too long to answer, and one competitor offered a paid pilot that removed the risk. Price was a factor in only one conversation.

The operating condition is plain: the business records why it wins and loses deals in a form too vague to act on, so strategy, pricing and product decisions are made on anecdote. That matters to the sales director and the managing director because they pay for the losses twice, once when the deal is lost and again when the fix aims at the wrong target.

## The problem in plain language

When a deal closes, the CRM asks the salesperson for a reason. In most systems that reason comes from a short pick-list set up when the CRM was configured: price, product, competitor, timing, no decision, other. The salesperson picks one in a few seconds, usually while moving on to the next deal.

That pick-list does several things badly. The categories are broad, so "price" can mean the quote was too high, the customer had no budget, a competitor discounted heavily or the customer wanted a cheaper version. The salesperson who lost the deal is the only person asked, and they have a natural bias towards reasons that sit outside their control. Nobody checks the answer against what the buyer said. Nobody reads the results in aggregate.

So the data looks complete, since every closed deal has a reason, but it carries almost no information. A report that shows most losses as "price" invites a price response whether or not price was the cause. A report that says most wins are due to "relationship" tells the business nothing about what to repeat.

This is different from [dead deals left open in the CRM](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/). That problem is about deals that never get closed, so no reason is recorded at all. This one concerns deals that are closed properly with a reason that explains nothing.

## What the buyer is actually trying to solve

Sales operations leads, sales directors and product and marketing heads describe this in practical terms. Why are we losing? Is it really price? Which losses are fixable and which are not? Which types of deal should we stop chasing? What should product build next? What do we tell the board when it asks why the forecast missed?

The outcome they want is a record of wins and losses that can change a decision. Reasons that map to something the business can do: change a price, build a feature, speed up a response, qualify out earlier, adjust an offer. Evidence beyond the salesperson's own view. A review each quarter in which patterns lead to named actions.

## Evidence and system mechanism

### What the CRM close form actually captures

CRM systems vary, but the common design is simple. Microsoft's documentation on [closing opportunities as won or lost](https://learn.microsoft.com/en-au/dynamics365/sales/close-opportunity-won-lost-sales) in Dynamics 365 Sales shows the standard pattern. When a salesperson selects Close as Won or Close as Lost, they verify and update details such as actual revenue, competitor, close date and description. If an administrator has added custom fields to the close form, those appear too. After closing, the opportunity's forecast category becomes Won or Lost. A sales manager who wants to understand why a deal was won or lost is directed to view the details entered by the salesperson in the opportunity close activity.

Two things stand out. The reason is whatever the salesperson enters at the moment of closing, and the main place a manager can read it is the same close record. Everything beyond competitor and a free-text description depends on someone having added custom fields, which only happens if somebody in the business decided it mattered.

Microsoft's [troubleshooting guidance for opportunities](https://learn.microsoft.com/en-us/troubleshoot/dynamics-365/sales/troubleshoot-opportunities-issues) adds a practical point: once an opportunity is closed as won or lost it becomes read-only. A product can let you reopen a closed record, but the design assumes the reason is captured at close and then left alone. Later learning, such as what a buyer says in a call a month afterwards, has no natural place to go unless the business creates one.

| Gap | Effect |
| --- | --- |
| Reason chosen from a short generic list | Everything lands in "price" or "other" |
| Salesperson alone supplies the reason | Reasons drift towards causes outside their control |
| Reason captured only at close | Later evidence has nowhere to be recorded |
| No evidence required for large deals | Nobody can check the reason against the facts |
| No buyer voice | The business never hears the real decision criteria |
| No regular review | Patterns are never turned into actions |

### Why "price" hides South African realities

South African buying decisions often include factors that a salesperson records as price. One example is the customer's own B-BBEE position. Under the Codes of Good Practice, a measured business scores for preferential procurement by weighting its spend with each supplier by that supplier's B-BBEE procurement recognition level. The formula appears in [Annexe 400(A) of the amended Code Series 400](https://www.acts.co.za/broad_based_black_econom/n1019_annexe_400a): the total B-BBEE procurement spend is the sum, across suppliers, of the value of procurement from each supplier multiplied by that supplier's recognition level.

For a customer whose scorecard is measured, buying from a supplier with a better recognition level improves its score. A competitor with a better level can therefore win a deal at the same or even a higher price, and the salesperson may reasonably record it as "price", because that is how the buyer explained it. A decision for which the supplier's B-BBEE level, local content, or similar requirement was decisive will not appear as that in a generic pick-list.

This is one example, and it depends on the customer, the sector and the current version of the Codes, which a verification agency or adviser can confirm. The broader point is that a list built for a generic market will not reflect your own. Your reason list should include the criteria South African buyers actually apply.

## Why this becomes urgent

A forecast miss is the usual trigger. Leadership has expected a certain number of wins, and the shortfall demands an explanation. The first place anyone looks is the CRM, and the explanation it offers is "price" or "other".

At that point two bad outcomes become likely. The business reacts to the data it has, perhaps cutting prices or discounting more freely, because the reasons point that way. Or it concludes that the data is useless and decides again on instinct. Either way, the next quarter repeats the same pattern, because the real causes were never found.

The pressure grows over time. Each missed forecast adds to the pile of unexplained losses, and the longer the CRM has held vague reasons, the less it can be used to answer the question.

## Economic consequence

The costs of vague reasons are spread across the business:

- **Repeated losses.** The same fixable problems keep costing deals, such as slow technical answers, a missing integration or a weak proposal for a certain type of buyer.
- **Wrong fixes.** Price cuts and discounts applied where price was not the cause, which gives away margin without winning more.
- **Wasted pursuit.** Salespeople and pre-sales staff spend effort on deals the business rarely wins, because nobody can see that a segment or deal type has a low success rate for a structural reason.
- **Product and marketing decisions made on anecdote.** The loudest recent story drives the roadmap, while recurring patterns go unseen.
- **Forecast trust.** Leaders stop trusting pipeline numbers because they cannot see why deals fail.

As an illustrative example only, suppose a business loses a series of mid-sized deals because it cannot connect to a common customer ERP, but every one is recorded as "price". The business responds with discounts for a year, giving away margin on the deals it still wins, while the integration that would have won the others sits unbuilt. The numbers are invented, but the pattern is familiar: a recorded reason that sends effort in the wrong direction costs more than no reason at all.

Reasons filled in only at the last moment also tie into [CRM updates made only before forecast meetings](/discovery/why-crm-updates-happen-only-before-forecast-meetings/), because the same rushed habit produces both. Where the "price" reason is used, [discount approvals kept outside the quote](/discovery/why-discount-approvals-live-in-chat-threads-instead-of-the-quote/) make it impossible to check what was actually offered, so the claim cannot be tested.

## Root cause

The root cause is that loss reasons are a short pick-list filled in at close by the salesperson alone, with no follow-up, evidence or review. Each of those four missing elements matters. The list is generic. The source is a single interested party. There is no evidence to test the answer against. And nobody reads the results as a pattern.

A second cause is that the list was designed around what is easy to report, not around the decisions leadership has to make. A list of "price, product, competitor, timing, other" is easy to count but does not tell the business whether to change a price, a feature, a process or a target market.

A third cause is that nobody owns the question. The CRM administrator maintains the list, the salespeople fill it in and leadership reads the chart. Nobody is responsible for asking whether the reasons are good enough to act on.

## Practical intervention

### Practical next actions

1. **Redesign the reason list around decisions.** Start from the decisions the business can make: change the price or packaging, build or fix a feature, improve response speed, qualify out earlier, change the offer, change the target segment. Write reasons that point to one of these, for example "no integration with the customer's system", "slower technical response than competitor" and "customer requirement we cannot meet". Include South African criteria that matter to your buyers, such as B-BBEE level or local content, where they apply.
2. **Split price into what it really means.** Replace the single "price" with specific options such as "our price above the budget", "competitor discounted below our floor", "customer wanted a cheaper version" and "no budget approved". Add "other" only with a required free-text note.
3. **Add a short structured debrief for significant deals.** Define "significant" by value or strategic importance. For those, require a few questions within a week of closing: who decided, what were the top three criteria, who else was considered, what would have changed the outcome, and what evidence supports each answer.
4. **Capture the debrief as its own record.** Link it to the opportunity but keep it separate, so later evidence can be added without reopening or editing the closed deal.
5. **Hear from some buyers directly.** For a sample of wins and losses each quarter, have someone who was not on the deal, such as a sales operations lead or a product manager, phone the buyer with a few open questions. Record the answers verbatim in a few lines.
6. **Compare the buyer's account with the CRM.** For the sampled deals, note where the salesperson's reason and the buyer's reason differ. The gaps show which categories are unreliable.
7. **Review patterns every quarter.** Bring the aggregated reasons, the debriefs and the buyer calls to a short meeting with sales, product and marketing. For each pattern, agree an action, an owner and a date, and record what changed.
8. **Close the loop.** Feed the findings back into the reason list, qualification rules, pricing guidance and the product backlog, and tell the sales team what changed because of what they recorded.

## Diagnostic questions

- What share of our lost deals in the last quarter are recorded as "price" or "other", and what do we know about why?
- When did we last ask a lost buyer directly why they chose someone else, and did the answer match the CRM?
- Does our reason list point to something we can act on, or does it only describe what happened?
- Who reads the win-loss data in aggregate, and what decisions has it changed in the past year?
- For our largest losses, do we have any evidence beyond the salesperson's own account?
- Which South African buying criteria, such as B-BBEE level or local content, are missing from our reasons?

## What good looks like

The reason list maps to decisions the business can make. Significant deals get a short structured debrief with evidence. A sample of buyers is contacted by someone independent each quarter. Differences between the salesperson's account and the buyer's account are tracked. A quarterly review turns the patterns into actions with owners, and the findings change pricing guidance, qualification rules and the product backlog.

You can measure the result. The share of losses recorded as "other" or a vague "price" falls. The share of significant deals with a debrief rises. The quarterly review produces a list of actions, and the business can show at least one decision that changed because of win-loss evidence. Forecast discussions begin with named reasons for risk, not with a general sense that price is a problem.

## Where Mellorca fits

If your CRM already holds closed deals but the reasons cannot be used, [business automation and AI workflows](/services/business-automation-ai-workflows/) can trigger the debrief task when a significant deal closes, prompt for evidence, schedule the buyer call and compile the reasons into a quarterly view. To redesign the reason list and set up the quarterly review with sales, product and marketing, [digital operations improvement](/services/digital-operations-improvement/) can build the routine into how your teams already work.

## Method note

This article draws on Microsoft's documentation on closing and troubleshooting opportunities in Dynamics 365 Sales, and on the text of the B-BBEE Codes of Good Practice as published on Acts Online. The scenario and the sums in it are illustrative and not measured. The article does not claim that any CRM is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the system you use. The B-BBEE example depends on the customer's own measurement and on the current version of the Codes, so confirm how they apply to your buyers with a verification agency or adviser. It is general information and not legal advice.
