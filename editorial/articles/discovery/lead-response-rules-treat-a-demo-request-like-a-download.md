---
hub: discovery
record_id: DISC-223
slug: lead-response-rules-treat-a-demo-request-like-a-download
title: Lead response rules treat a demo request like a download
description: Routing rules treat every lead the same, so buyers with a deadline wait behind casual enquiries. Tier leads by urgency, set targets per tier and escalate what nobody picks up.
lead: Routing rules treat every lead the same, so buyers with a deadline wait behind casual enquiries. Tier leads by urgency, set targets per tier and escalate what nobody picks up.
category: Sales Operations & CRM
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: Sales or revenue operations lead
budget_owner: CRO or COO
sources:
  - Manage leads | https://learn.microsoft.com/en-us/dynamics365/sales/lead-management-overview
  - Prioritize leads through predictive scores | https://learn.microsoft.com/en-ca/dynamics365/sales/work-predictive-lead-scoring
  - The Short Life of Online Sales Leads | https://scholarsarchive.byu.edu/facpub/9711
  - Are you letting online leads go cold? | https://www.smartcompany.com.au/marketing/20110704-are-you-letting-online-leads-go-cold/
related:
  - Marketing leads arrive without useful qualification context | /discovery/why-marketing-leads-reach-sales-without-the-context-needed-to-qualify-them/
  - Quotes move to spreadsheets when CRM pricing cannot be trusted | /discovery/quotes-move-to-spreadsheets-when-crm-pricing-cannot-be-trusted/
  - Nobody keeps customer contact roles current after the deal | /discovery/nobody-keeps-customer-contact-roles-current-after-the-deal/
summary: Routing rules treat every lead the same, so buyers with a deadline wait behind casual enquiries. Tier leads by urgency, set targets per tier and escalate what nobody picks up.
layout: plain
---
Picture a Johannesburg supplier of industrial equipment on the morning after a quarterly forecast miss. The head of sales operations pulls the lead data to see where the pipeline leaked. One example stands out. At ten to five on a Friday, an operations manager at a manufacturing customer filled in the website form: "Need a quote before our board meets at month-end." The form went into the lead queue, where the routing rule is a round-robin that gives each rep an equal share. The next rep in the rotation was on leave. The lead sat until Tuesday, when a colleague noticed it and phoned. By then the buyer had received two quotes from competitors and picked one.

The queue that held that lead also held webinar sign-ups, brochure downloads and a handful of newsletter subscriptions. The rule treated them all the same: assign in turn, respond within twenty-four hours. A buyer with a board deadline and a person who downloaded a brochure out of curiosity received the same treatment, so the urgent one waited its turn.

The operating condition is plain: the business routes and answers leads by rules that ignore how soon the buyer has to act. That matters to the revenue operations lead and to the CRO or COO because the deals most likely to close this quarter are the ones that suffer, and the forecast, which assumes they are being worked, is wrong when they are not.

## The problem in plain language

Leads arrive from many places. Some come from a person who has decided to buy and wants a quote. Others come from someone who is researching, comparing options or just reading. They look alike in the CRM: a name, an email address, a source and a timestamp.

Most businesses set rules for what happens next. A lead is assigned to a seller by territory, by account, by turn or by workload. A target is set for how quickly someone must respond, often one business day. A follow-up sequence is started: a call, an email, another call.

These rules are usually built for fairness and tidiness. Each rep gets a share of the leads. Each territory is covered. Every lead has a target. The rules make no distinction between a buyer with a deadline and a buyer with none, because the information that would tell them apart is rarely used in routing.

So the buyer with a deadline waits in the same line as everyone else. If the line is short and the reps are available, nothing goes wrong. When the line is long, or the next rep is away, or the lead arrives on a Friday evening, the urgent buyer is lost to whoever answered first.

This is different from [CRM updates made only before forecast meetings](/discovery/why-crm-updates-happen-only-before-forecast-meetings/). That problem is about records being brought up to date late. This one is about the rule that decides who calls whom, and how soon.

## What the buyer is actually trying to solve

Sales operations and revenue operations leads put this in practical terms. Why are we losing deals we should have won? Why do some buyers tell us another supplier called back first? Which leads are urgent, and how do we know before someone calls? Why does the forecast assume deals are progressing when the first call never happened?

The outcome they want is a response that matches the buyer's urgency. Buyers who signal that they are ready to act get a prompt human response. Buyers who are researching get a slower, lighter-touch follow-up. Every lead has a record of when it arrived, who took it, when they first tried to reach the buyer and what happened.

## Evidence and system mechanism

### Routing rules and scoring exist, but they answer different questions

CRM systems give administrators several tools. Microsoft's documentation on [managing leads in Dynamics 365 Sales](https://learn.microsoft.com/en-us/dynamics365/sales/lead-management-overview) says an administrator can define lead assignment rules, which auto-assign leads to sellers based on certain rules, as well as duplicate detection and predictive scoring rules. Other CRMs offer similar features under different names.

Predictive scoring answers a useful question: how likely is this lead to convert? The Microsoft page on [prioritising leads through scores](https://learn.microsoft.com/en-ca/dynamics365/sales/work-predictive-lead-scoring) describes a model that generates a score for each lead, a grade based on that score, and score ranges for each grade that an administrator defines. It notes that real-time scoring works only for new leads. The score is a statistical estimate from patterns in past leads.

That is not the same as urgency. A lead can have a high likelihood of converting and no deadline, in which case a next-day reply costs little. Another lead can have a modest score and a hard date, such as a board meeting or a tender closing, in which case a next-day reply may cost the deal. The score says how good the lead looks. Urgency says how soon the buyer will decide. Routing needs both, and the second one has to come from signals the business chooses to capture and use, such as what the buyer asked for and when they need it. This is a point about design, not a limitation the documentation states.

### The research on speed points the same way

The classic study of response time is the Harvard Business Review article [The Short Life of Online Sales Leads](https://scholarsarchive.byu.edu/facpub/9711) by James Oldroyd, Kristina McElheran and David Elkington, published in 2011. As quoted in [SmartCompany's coverage](https://www.smartcompany.com.au/marketing/20110704-are-you-letting-online-leads-go-cold/), the authors studied 1.25 million leads received by 29 consumer-facing and 13 business-to-business companies in the United States. They found that firms that tried to contact a prospect within an hour of a query were nearly seven times as likely to qualify the lead as firms that tried even an hour later, and more than 60 times as likely as firms that waited 24 hours or more. Qualifying meant having a meaningful conversation with a key decision maker.

The same coverage reports the authors' view of why firms are slow. The reasons they gave include retrieving leads from the CRM database daily instead of continuously, sales forces that concentrate on generating their own leads instead of reacting to buyers' signs of interest, and rules for distributing leads among agents and partners on the basis of geography and "fairness". The last of these is precisely the kind of rule that ignores urgency.

These findings come from United States companies and from 2011, and they are an average across many kinds of leads. They show the direction and size of the effect, not a number to expect in your own business, and you should measure your own response times against your own conversion results.

| Gap | Effect |
| --- | --- |
| Same assignment rule for every lead | A buyer with a deadline waits behind casual enquiries |
| Turn-based assignment with no cover | A lead assigned to someone on leave sits unseen |
| One response target for all leads | The target is too slow for urgent buyers and too tight for casual ones |
| Urgency signals captured but not used | The information that would prioritise leads is ignored |
| No escalation if a lead is not picked up | Leads stall without anyone noticing |
| Response times not measured | The business cannot see where speed costs deals |

### What South African law expects when you respond

South African privacy law shapes how fast and how automatically a business may respond. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) restricts direct marketing by electronic communication in section 69. In general, a business may not use personal information to send direct marketing by electronic means, including email and SMS, unless the person has consented, or is an existing customer to whom the business is marketing its own similar products and who has been given a fair chance to object. The business may approach a person for consent only once, and each message must say who sent it and how to opt out.

A quick, personal reply to a buyer's request for a quote is an answer to that request. An automatic sequence of promotional messages sent to the same person because they filled in a form is likely to be direct marketing, and needs a consent basis. Rules that speed up response must keep these apart. Section 16 of the same Act also requires reasonable steps to keep personal information accurate and up to date, which matters for the contact details that urgent follow-up depends on. Confirm with your information officer how the Act applies to your own responses and sequences.

## Why this becomes urgent

A forecast miss is the usual trigger. Leadership expected a certain number of deals to close, and they did not. The review asks where the pipeline leaked, and a close look at the early stages shows leads that were never contacted in time, leads routed to the wrong person and leads that went to a competitor.

The finding is awkward, because the forecast was built on the assumption that leads were being worked. Stage conversion rates were applied to the pipeline as if each lead had the same chance of a prompt response. When some did not get one, the conversion rates that the forecast relied on were wrong for those leads, and the error shows up as a miss.

Growth makes it worse. More leads arrive, more reps share the queue, more of them are on leave or in meetings at any time, and the share of leads that wait a day or more rises with the load.

## Economic consequence

The costs of response rules that ignore urgency appear in several places:

- **Slow pipeline movement.** Leads wait for assignment, a first call or a second attempt, and each day of waiting is a day the buyer may spend with a competitor.
- **Forecast error.** The forecast assumes deals progress at historical rates. Deals that were not worked quickly convert at lower rates, so the forecast is optimistic in a way that is hard to see.
- **Admin burden.** Reps and managers triage queues by hand, check who is away, reassign leads that stalled and chase colleagues, work that a rule could do.
- **Missed follow-up.** Urgent buyers who are not reached in the first attempt receive no second try inside their window, and the lead is closed as unresponsive.
- **Poor conversion visibility.** Without timestamps for assignment, first attempt and first conversation, the business cannot tell whether poor conversion is caused by lead quality, rep skill or slow response.

As an illustrative example only, suppose a business receives a hundred demo and quote requests a month and loses some of them because the first call happens after the buyer's deadline. If each lost request would have been worth a mid-sized deal at the usual close rate, a handful of late calls a month adds up to a visible share of the quarterly target. The figures are invented, but the mechanism is real: a small number of urgent leads carries a large share of the near-term revenue.

Leads that are not disqualified clutter the queue too. When [dead deals are left open in the CRM](/discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/), the list of things to work grows, and the urgent ones are harder to see among them.

## Root cause

The root cause is that lead response rules are built around fairness and a single service target, not around what the buyer has said about timing and intent. The rules were designed to share work evenly and to cover territories, and they do that. They were not designed to ask how soon the buyer must decide.

A second cause is that the signals exist but are not used. The form asks for a timeline, or the buyer asks for a quote or a demo, or visits the pricing page several times in a day. These facts are stored in the CRM or the marketing system, but nothing in the routing rule reads them.

A third cause is that response is not measured. The CRM records when a lead was created and eventually when it was converted, but not when it was assigned, when the first attempt was made or whether a conversation took place. Without those timestamps, nobody can show that speed matters in this business, and nobody owns the problem. Where [customer account structures miss real relationships](/discovery/why-crm-account-hierarchies-miss-how-customers-are-really-connected/), a request from an existing customer's new contact can arrive as a cold lead, with no sign that a live order depends on the reply.

## Practical intervention

### Practical next actions

1. **List the urgency signals you already have.** Review the forms, the CRM fields and the marketing data. Typical signals are a stated deadline or timeline, a request for a quote, price or demo, a reply to a proposal, repeated visits to pricing or product pages, and a contact from an existing customer with an open order. Add a field to the form that captures the buyer's timing, if you do not have one.
2. **Define a few tiers.** For example: needs action now, needs action today, and nurture. Write down which signals put a lead in which tier. Test the rules against last quarter's won and lost deals to see whether they would have caught the ones that were lost to slow response.
3. **Set a response target for each tier.** Agree with sales leadership a target for the first attempt and for the first meaningful conversation, expressed in minutes or hours during working time. Keep the top tier short and achievable, and set different targets for out-of-hours arrivals.
4. **Route the top tier to whoever is available.** Replace turn-based assignment with an on-duty rota, with named cover for leave and lunch breaks, so that a lead is never assigned to someone who is not at work. Keep the fair-share rule for the lower tiers.
5. **Escalate automatically.** If an urgent lead is not accepted within a set time, reassign it and notify the manager. If a first attempt does not reach the buyer, schedule the next attempt inside the buyer's window.
6. **Acknowledge quickly, and keep it separate from marketing.** Send a short, personal acknowledgement that confirms the request and says when a person will call. Do not attach promotional content or start a marketing sequence without the consent that section 69 requires, and record consent and opt-outs.
7. **Capture the timestamps.** Record when each lead arrived, when it was assigned, when the first attempt was made and when the first conversation took place. Make them fields that the rules fill in automatically, not boxes for reps to complete.
8. **Report conversion by tier and response time.** Show qualification and win rates by tier and by how long the first response took. Use the results to adjust the tiers, the targets and the staffing.
9. **Connect the findings to the forecast.** Flag deals whose first response was late, and review whether the conversion rate assumed for them is realistic. Include response performance in the forecast review.
10. **Review the rules regularly.** Check the tiers and targets each quarter against what the data shows, and after any change in lead sources or team structure.

## Diagnostic questions

- Which of last quarter's lost deals came from leads that asked for a quote or demo, and how long did the first response take?
- Does our routing rule use anything the buyer told us about timing or intent?
- Who covers a lead that is assigned to someone who is on leave or in a meeting?
- Do we record when the first attempt was made and when the first conversation happened?
- What happens to an urgent lead that nobody has accepted after an hour?
- Do our automatic follow-ups distinguish a reply to a request from a promotional message, and do we hold consent for the latter?

## What good looks like

Leads carry an urgency tier based on signals the business has chosen. Top-tier leads go to an on-duty seller with cover and are escalated if nobody accepts them. Each tier has a response target. A short, personal acknowledgement goes out straight away, and marketing sequences start only where consent exists. Every lead has timestamps for arrival, assignment, first attempt and first conversation. A report shows conversion by tier and response time, and the forecast takes late first responses into account.

You can measure the result. The share of top-tier leads that receive a first attempt within target rises. The number of leads that sit unassigned for more than a working day falls to a handful. Conversion for top-tier leads improves relative to the earlier baseline. Forecast misses that trace back to leads that were not worked in time become rare, and when one occurs the timestamps show why.

## Where Mellorca fits

If your CRM already holds the signals but the rules do not use them, [business automation and AI workflows](/services/business-automation-ai-workflows/) can score and tier each lead as it arrives, route urgent ones to the on-duty seller, escalate when nobody accepts and record the timestamps automatically. To agree the tiers, the response targets and the review routine with sales, marketing and operations, [digital operations improvement](/services/digital-operations-improvement/) can design the process and help it become part of the weekly rhythm.

## Method note

This article draws on Microsoft's documentation on managing and scoring leads in Dynamics 365 Sales, the 2011 Harvard Business Review study The Short Life of Online Sales Leads as quoted by SmartCompany, and the text of the Protection of Personal Information Act. The scenario, the lead volumes and the sums in it are illustrative and not measured. The research findings come from United States companies in 2011 and should be treated as a guide to the direction and size of the effect, not a prediction for any one business. The article does not claim that any CRM feature is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the system you use. It is general information and not legal advice: confirm your obligations under sections 16 and 69 of the Protection of Personal Information Act with your information officer or legal adviser.
