---
hub: impact
record_id: CPS-334
slug: complaints-recorded-not-analysed-recurring-causes-repeat-failure-cost
title: Complaints Logged but Never Analysed: Paying Repeatedly for One Failure
description: When complaints are logged one at a time and never grouped by cause, the same fault is paid for again and again in credits, call-outs, staff time and lost customers.
lead: When complaints are logged one at a time and never grouped by cause, the same fault is paid for again and again in credits, call-outs, staff time and lost customers.
category: Customer Service
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Customer Service
commercial_domain: Customer Service
primary_pain: Customer complaints recorded but not analysed for recurring causes
primary_cost_mechanism: Repeated credits, replacements and call-outs for the same fault, investigation time restarted on every case, lost repeat business and weaker footing in consumer disputes
sources:
  - https://www.thencc.org.za/consumer-protection-act | https://www.thencc.org.za/consumer-protection-act
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
  - https://learn.microsoft.com/en-us/training/paths/work-with-cases-in-dynamics-365-for-customer-service/ | https://learn.microsoft.com/en-us/training/paths/work-with-cases-in-dynamics-365-for-customer-service/
summary: When complaints are logged one at a time and never grouped by cause, the same fault is paid for again and again in credits, call-outs, staff time and lost customers.
layout: plain
---
## The complaint is logged, the cause is not

Picture a Pretoria company that sells and installs solar geysers. Every complaint is recorded: a call-centre note, a WhatsApp message, an email to the owner. The team replies, sends a technician, and marks the ticket closed. By the end of the month there are 60 closed tickets and everybody feels they have been responsive.

Nobody has asked what the 60 tickets have in common. If 22 of them involve the same controller fitted by one subcontractor crew, the business is not dealing with 22 unlucky customers. It is dealing with one fault that it is paying for 22 times: the technician's call-out, the replacement part, the discount offered to calm the customer and the management time spent apologising.

That is the pain this article is about. Recording a complaint is not the same as learning from it. When complaints are captured one at a time and never grouped by cause, the business keeps funding the same failure, and each repetition looks like a fresh, unrelated problem.

## Why a closed ticket tells you so little

Most small and mid-sized businesses log complaints in a shared inbox, a spreadsheet or a general-purpose ticket tool. Those tools are good at tracking the status of each case. They are poor at answering the question that matters to the owner: what keeps going wrong, and where?

- **The reason field is free text.** One clerk writes "late delivery", another writes "courier problem" and a third writes "waiting 3 weeks". Three entries, one cause, no way to count them.
- **The ticket records the symptom, not the cause.** "Customer unhappy with invoice" hides whether the quote was wrong, the order was changed, or the billing system rounded a line incorrectly.
- **The person who fixes it is not the person who could prevent it.** A service agent refunds the customer. The warehouse manager who could change the packing process never sees the case.
- **Success is measured by speed of closing.** A team rewarded for closing tickets within a day has no reason to stop and tag the cause.
- **Complaints arrive in several channels.** A problem reported on social media, by phone and by email appears as three separate events, as described in [customer requests lost in a shared inbox](/impact/customer-requests-lost-shared-inbox-missed-service-work/).

## Where the repeated cost actually sits

The cost of a recurring failure is rarely a single line on the income statement. It is spread across several, which is why it goes unnoticed.

### Direct cost per incident

Each repeat carries a replacement, a credit note, a courier collection or a technician's time. Suppose the average incident costs R1,150 in parts, travel and credits. At 22 incidents a month, that is R25,300 a month, or about R303,600 a year. These numbers are illustrative, but the arithmetic is the point: a failure that looks small per customer becomes a six-figure item once it is counted as a total.

### Handling time

Every repeat complaint takes staff time to receive, investigate and answer, and the investigation starts from zero each time. This overlaps with [fixing preventable mistakes](/impact/fixing-preventable-mistakes-rework-customer-time-cost/), where labour goes on correcting work that should have been right first time.

### Lost repeat business

A customer who complains once and is helped may stay. A customer who experiences the same fault twice, or hears that a friend had it too, rarely gives a third chance. The cost is not visible in the complaints log because the customer never complains again; they simply stop buying.

### Consumer protection exposure

South African consumers have statutory rights where goods are defective or services are not performed with reasonable care and skill. The [Consumer Protection Act](https://www.thencc.org.za/consumer-protection-act) is summarised by the National Consumer Commission and provides for remedies such as repair, replacement or refund for qualifying defects. A business that has seen the same defect in a dozen cases cannot easily claim surprise at the thirteenth, and a pattern of ignored complaints makes any later dispute harder to handle. This article is not legal advice; a business with a specific dispute should consult a qualified adviser.

## What analysing complaints actually involves

Analysis does not require specialist software or a data team. It requires three habits: classify each complaint at the time it is logged, review the classification on a fixed rhythm, and give someone the authority to act on what the review finds.

Start with a short, fixed list of root-cause categories, usually eight to twelve. A retailer might use wrong item, damaged in transit, late delivery, pricing or invoice error, product fault, staff conduct, website or stock information, and other. A drop-down in the ticket form is enough. If your tool supports case categories and resolution codes, the structure is documented in vendor training material such as Microsoft's course on [managing cases in Dynamics 365 Customer Service](https://learn.microsoft.com/en-us/training/paths/work-with-cases-in-dynamics-365-for-customer-service/), which is useful as a reference for what a basic case structure looks like even if you use a different product.

Keep one rule: "other" must stay small. If more than about 10 percent of tickets land there, the list needs to change.

Then add two further fields that make the data useful: the product, branch or supplier involved, and the cost of resolving the case. With those three pieces of information (category, source, cost) a simple pivot table answers the question "what are we paying for most often?"

## A short example of a monthly review

Return to the solar geyser company. At the first monthly review, the owner and the operations manager sort 60 tickets by category. The chart shows installation faults at 31, billing queries at 14, late delivery at 9 and other at 6. They then split installation faults by crew and find 19 of the 31 involve a single installer team that was recently onboarded. The corrective action is not heroic: a re-training day, a checklist signed on completion and a spot inspection of the next ten installations. The next month, installation faults drop. The business did not become better at apologising; it became better at stopping the cause.

## Protecting customers' information while you analyse

Complaint records contain personal information: names, contact numbers, addresses, sometimes health or financial details. The [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) expects a responsible party to process personal information for a defined purpose and to protect it from unauthorised access. Using complaint records to find recurring causes is consistent with that purpose in most cases, but it is sensible to analyse the categories and costs rather than circulate full customer details to everyone. A summary table with ticket counts and anonymised examples is usually enough for a management meeting.

## Common mistakes when starting

- **Treating the review as a blame session.** If people fear the data will be used to punish them, they will classify generously. Frame the review around fixing causes.
- **Analysing only the number of complaints.** A cause with five tickets at R12,000 each matters more than one with 30 tickets at R80 each.
- **Stopping at the report.** A list of causes with no owner and no due date produces no change. Each recurring cause needs a named person and a date.
- **Ignoring repetition inside the service team.** If agents repeatedly answer the same query, the answer probably belongs in a visible place, as discussed in [support teams answering the same questions daily](/impact/support-teams-answering-same-questions-daily-undocumented-knowledge-labour-cost/).

## Practical next actions

1. **Pull the last three months of complaints into one list.** Combine email, phone notes, messaging apps and social media into a single sheet, even if it takes an afternoon.
2. **Read 50 of them and write down the real cause of each.** Group similar causes and count them. You will usually find three or four causes account for most of the volume.
3. **Add a mandatory root-cause field to your complaint form.** Use a drop-down of eight to twelve options, plus the product, branch or supplier involved.
4. **Record the cost of resolving each complaint.** Include credits, replacements, travel and an estimate of staff time, so the review ranks causes by Rand and not by count alone.
5. **Hold a 45-minute review every month.** Invite the people who can change the cause, such as operations, procurement or the installation lead, not only the service desk.
6. **Assign an owner and a date to each of the top three causes.** At the next review, check whether the number of complaints in that category has fallen.

The first review will probably be uncomfortable, because it puts a price on problems that have been tolerated for a long time. It is also the cheapest improvement project most businesses can run, because the information is already sitting in the complaints you have recorded.
