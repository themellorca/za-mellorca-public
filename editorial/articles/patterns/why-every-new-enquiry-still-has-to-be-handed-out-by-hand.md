---
hub: patterns
record_id: PAT-111
slug: why-every-new-enquiry-still-has-to-be-handed-out-by-hand
title: Why New Enquiries Still Need Manual Distribution
description: Enquiries arrive through the website, email and phone, then wait for someone to decide who should take them. This article explains why, and how to make the hand-out automatic.
lead: Enquiries arrive through the website, email and phone, then wait for someone to decide who should take them. This article explains why, and how to make the hand-out automatic.
category: Sales & Lead Management
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Sales & Lead Management
pattern_family: Sales & Lead Management
observable_condition: Every new enquiry, whatever the channel, waits until one person reads it and decides which colleague should respond, and it is delayed whenever that person is busy or away.
primary_identification: Unwritten allocation rules: the criteria for who should take an enquiry exist only as one person's judgement, so distribution cannot happen without that person.
commercial_value_dimensions: Speed to first response, conversion of enquiries, sales capacity, manager time and revenue continuity
sources:
  - https://learn.microsoft.com/en-us/power-automate/overview-cloud | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - https://learn.microsoft.com/en-us/power-automate/sharepoint-overview | https://learn.microsoft.com/en-us/power-automate/sharepoint-overview
  - https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
summary: Enquiries arrive through the website, email and phone, then wait for someone to decide who should take them. This article explains why, and how to make the hand-out automatic.
layout: plain
---
## Observable condition

A Johannesburg commercial insurance broker receives enquiries in four ways: a form on the website, the info@ mailbox, direct emails to individual brokers and calls to the reception desk. Whatever the route, the enquiry ends up with the office manager. She reads it, decides whether it is a fleet quote, a property quote or a claim question, checks who is free, and forwards it with a short note.

On a quiet Tuesday this takes minutes. On a Monday morning with the month-end rush, or on the day she is at the dentist, enquiries wait. Nobody has done anything wrong. The business has simply made one person the switch through which every new opportunity must pass.

This is an illustrative example, but the shape is familiar. The visible sign is the phrase "can you take this one?" in a forwarded email. The underlying condition is that distribution still needs a human decision.

## Realisation

The realisation is that the person doing the distribution is rarely slow. She is applying rules. She knows that Thandi handles transport, that Pieter prefers larger accounts, that anything from the Western Cape goes to the Cape Town office, and that a returning client should go to whoever served them last. These rules are sensible. They are also written nowhere.

That is why the work stays manual. A system can only distribute enquiries according to rules it has been given, and in this business the rules are carried in one head. The point is made, in a different setting, in [when lead routing depends on someone checking an inbox](/patterns/when-lead-routing-depends-on-someone-checking-an-inbox/): the delay is created by the dependency, not by effort.

**Realisation prompt:** ask the person who distributes enquiries to explain, out loud, how she decides. Count the rules she mentions. Each one is a candidate for being written down.

## Identification

This is a pattern of unwritten allocation rules. The symptom is a single point of delay at the front of the sales process. The common assumption is that distribution needs human judgement, or that the business is too small for automation to make sense. The structural cause is that the judgement has never been turned into criteria, so it cannot be applied by anyone or anything else.

It is different from enquiries that are captured but never followed up, covered in [when a lead enters the CRM but nobody acts](/patterns/when-a-lead-enters-the-crm-but-nobody-acts/). Here the enquiry has not yet reached a person who owns it.

## Diagnosis

- **Several doors, one corridor.** Enquiries come in through different channels, then all converge on one inbox or one person. The channels have been multiplied, but the sorting step has not.
- **Rules live in experience.** Allocation depends on product type, region, client size, language, existing relationships and who is free. None of these is captured in a form that can be applied automatically.
- **Information arrives unstructured.** An email that says "please quote" does not state the product, region or size. The distributor has to read and interpret before she can route.
- **Availability is invisible.** Nobody can see at a glance who has capacity, so the distributor checks informally or guesses.
- **There is no fallback.** If the distributor is away, enquiries accumulate or are picked up at random.

## Commercial impact

Speed of first response is the main casualty. An enquiry that waits hours before it reaches the right person is more likely to have been answered by a competitor in the meantime. The cost is hard to see because the lost enquiries never appear anywhere. You can read more about the revenue effect in [unassigned sales enquiries and leads going cold](/impact/unassigned-sales-enquiries-leads-going-cold/).

There is also a capacity cost. The distributor spends part of every day sorting and forwarding, which is work that adds no new information. The sales team receives enquiries in bursts rather than steadily, which makes planning harder. And the business carries key-person risk: one resignation, one illness, and the front of the sales process stalls.

Allocation by hand also tends to be uneven. Familiar names get the interesting enquiries, newer team members get little, and nobody can show whether the split is fair or effective.

## Common misidentification

Owners often read this as a staffing problem and hire a second administrator to share the sorting. That halves the queue but keeps the dependency. Others read it as a CRM problem and buy software, then discover that the CRM needs exactly the rules nobody has written down.

A third misreading is that automatic distribution is only for large call centres. It is not. A business with five salespeople can benefit from three clear rules as much as a business with fifty.

## Possibility

Once the rules are written, distribution becomes a mechanical task. Many business tools allow actions to be triggered when something arrives. [Microsoft's overview of cloud flows](https://learn.microsoft.com/en-us/power-automate/overview-cloud) describes flows that start automatically when an event occurs, such as a new email or form submission. The [documentation on SharePoint workflows](https://learn.microsoft.com/en-us/power-automate/sharepoint-overview) describes a similar trigger when an item is added to a list. Either could be used to assign and notify. These are examples to evaluate, not recommendations.

Structured stages help once an enquiry has an owner. [Business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) are described by Microsoft as guiding people through a defined set of stages, which suits the step after allocation.

Importantly, a rule-based hand-out does not remove human judgement. It reserves it for the exceptions, where it is most valuable.

## Intervention

Begin on paper. Before touching any software, write down the allocation rules in plain language and test them against last month's enquiries. If the rules would have produced the same split the distributor actually made in most cases, they are ready to be applied. If not, the differences show where more thought is needed.

Then standardise the front door. A web form with a product drop-down and a province field gives you the data to route on. Emails to the general mailbox can be answered with a link to the form for quotations, which also helps with the earlier cost of re-keying details.

## Practical next actions

1. **Interview the distributor.** Ask how she decides who takes each enquiry and write every rule down in a single page.
2. **Test the rules.** Apply them to the last 30 enquiries and compare the result with what actually happened. Adjust until they agree in most cases.
3. **Add the missing fields.** Update the website form so it captures product, region and urgency, which are the facts most routing rules need.
4. **Name a fallback.** Decide who receives an enquiry when the first choice is away or has not responded within a set time, such as 30 minutes.
5. **Automate the simplest rule first.** Choose one clear rule, such as all fleet enquiries to one broker, and have it assign and notify automatically for a month.
6. **Measure time to first response.** Record the minutes from arrival to first reply before and after, and use the figures to decide on the next rule.

## Diagnostic questions

- How many people or inboxes does a new enquiry touch before a salesperson owns it?
- Could someone else distribute enquiries tomorrow using only what is written down?
- What happens to enquiries when the distributor is on leave?
- Which details do we need from an enquiry in order to route it, and does the form ask for them?
- How long does it take, on average, for a new enquiry to get a first reply?

## Bottom line

Manual distribution is not a sign of a careless business. It is the visible edge of rules that were never written. Put those rules on paper, collect the few facts needed to apply them, and let the routine cases assign themselves. Your best people can then spend their judgement on the unusual enquiries, and the ordinary ones reach the right person while the customer is still waiting.
